import { Injectable } from '@angular/core';

import { AngularFirestore, DocumentReference, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Behavior } from '../../models/behavior.interface';

@Injectable({
  providedIn: 'root'
})
export class BehaviorsService {

  private behaviorsPrefix = 'behaviors';
  private behaviorsCollection: string;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.behaviorsCollection = this.behaviorsPrefix; // + user.id
    // TODO: How to get the userId for relative path
  }

  createBehavior(behavior): Promise<DocumentReference> {
    const id = this.firestore.createId();
    behavior.id = id;
    return this.firestore.collection(this.behaviorsCollection).add(behavior);
  }

  getBehavior(id): AngularFirestoreDocument<Behavior> {
    return this.firestore.doc(this.behaviorsCollection + '/' + id);
  }

  getAllBehaviors(): AngularFirestoreCollection<Behavior> {
    return this.firestore.collection(this.behaviorsCollection);
  }

  updateBehavior(id, behavior) {
    this.firestore.doc(this.behaviorsCollection + '/' + id).update(behavior);
  }

  deleteBehavior(id) {
    this.firestore.doc(this.behaviorsCollection + '/' + id).delete();
  }
}
