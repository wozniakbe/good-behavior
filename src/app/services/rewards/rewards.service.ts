import { Injectable } from '@angular/core';

import { AngularFirestore, DocumentReference, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Reward } from '../../models/reward.interface';

import * as firebase from 'firebase';
import { AuthService } from '../users/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private rewardsPrefix = 'rewards';
  private rewardsListRef: AngularFirestoreCollection;
  public currentUser: firebase.User;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async getRewardsList(): Promise<AngularFirestoreCollection> {
    await this.initializeRefs();
    return this.rewardsListRef;
  }

  async createReward(reward): Promise<firebase.firestore.DocumentReference> {
    await this.initializeRefs();
    const id = this.firestore.createId();
    reward.id = id;
    return this.rewardsListRef.add(reward);
  }

  async getReward(id: string): Promise<AngularFirestoreDocument> {
    await this.initializeRefs();
    return this.rewardsListRef.doc(id);
  }

  async updateReward(id, reward) {
    await this.initializeRefs();
    const rewardRef = this.rewardsListRef.doc(id);
    return rewardRef.update(reward);
  }

  async deleteReward(id) {
    await this.initializeRefs();
    const rewardRef = this.rewardsListRef.doc(id).delete();
  }

  async initializeRefs() {
    if (!this.currentUser) {
      this.currentUser = await this.authService.getUser();
    }
    if (!this.rewardsListRef) {
      this.rewardsListRef = this.firestore
        .collection(`users/${this.currentUser.uid}/${this.rewardsPrefix}`);
    }
  }
}
