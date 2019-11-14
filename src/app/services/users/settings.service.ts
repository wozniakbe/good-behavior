import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public userProfile: firebase.firestore.DocumentReference;
  public currentUser: firebase.User;

  constructor(private authService: AuthService) {}

  async getSetting(name: string) {
    const user: firebase.User = await this.authService.getUser();
    this.currentUser = user;
    this.userProfile = firebase.firestore().doc(`users/${user.uid}`);
    const setting = this.userProfile.collection('settings').doc(name);

    return setting.get();
  }

  updateSetting(name: string, value: any): Promise<void> {
    return this.userProfile.collection('settings').doc(name).update({ enabled: value});
  }
}
