import { Injectable } from '@angular/core';

import { AngularFirestore, DocumentReference, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Behavior } from '../../models/behavior.interface';

import * as firebase from 'firebase';
import { AuthService } from '../users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsService {

  private behaviorsPrefix = 'behaviors';
  private behaviorsListRef: firebase.firestore.CollectionReference;;
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) { }

  async getBehaviorsList(): Promise<firebase.firestore.QuerySnapshot> {
    await this.initializeRefs();
    return this.behaviorsListRef.get();
  }

  async createBehavior(behavior): Promise<firebase.firestore.DocumentReference> {
    await this.initializeRefs();
    const id = this.firestore.createId();
    behavior.id = id;
    return this.behaviorsListRef.add(behavior);
  }

  async getBehavior(id: string): Promise<firebase.firestore.DocumentSnapshot> {
    await this.initializeRefs();
    return this.behaviorsListRef.doc(id).get();
  }

  async updateBehavior(id, behavior) {
    await this.initializeRefs();
    const behaviorRef = this.behaviorsListRef.doc(id);
    return behaviorRef.update(behavior);
  }

  async deleteBehavior(id) {
    await this.initializeRefs();
    const behaviorRef = this.behaviorsListRef.doc(id).delete();
  }

  async initializeRefs() {
    if (!this.currentUser) {
      this.currentUser = await this.authService.getUser();
    }
    if (!this.behaviorsListRef) {
      this.behaviorsListRef = firebase
        .firestore()
        .collection(`users/${this.currentUser.uid}/${this.behaviorsPrefix}`);
    }
  }
}
