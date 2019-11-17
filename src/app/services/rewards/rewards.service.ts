import { Injectable } from '@angular/core';

import { AngularFirestore, DocumentReference, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Reward } from '../../models/reward.interface';

import * as firebase from 'firebase';
import { AuthService } from '../users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RewardsService {

  private rewardsPrefix = 'rewards';
  private rewardsListRef: firebase.firestore.CollectionReference;;
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async getRewardsList(): Promise<firebase.firestore.QuerySnapshot> {
    await this.initializeRefs();
    return this.rewardsListRef.get();
  }

  async createBehavior(reward): Promise<firebase.firestore.DocumentReference> {
    await this.initializeRefs();
    const id = this.firestore.createId();
    reward.id = id;
    return this.rewardsListRef.add(reward);
  }

  async getBehavior(id: string): Promise<firebase.firestore.DocumentSnapshot> {
    await this.initializeRefs();
    return this.rewardsListRef.doc(id).get();
  }

  async updateBehavior(id, reward) {
    await this.initializeRefs();
    const behaviorRef = this.rewardsListRef.doc(id);
    return behaviorRef.update(reward);
  }

  async deleteBehavior(id) {
    await this.initializeRefs();
    const behaviorRef = this.rewardsListRef.doc(id).delete();
  }

  async initializeRefs() {
    if (!this.currentUser) {
      this.currentUser = await this.authService.getUser();
    }
    if (!this.rewardsListRef) {
      this.rewardsListRef = firebase
        .firestore()
        .collection(`users/${this.currentUser.uid}/${this.rewardsPrefix}`);
    }
  }
}
