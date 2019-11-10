import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      firebase.initializeApp(environment.firebase);
      // Use matchMedia to check the user preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

      // TODO: Probably want to prompt before changing, and also give user ability to toggle
      // this.toggleDarkTheme(prefersDark.matches);
      // TODO: Use AlertController to prompt about dark mode setting

      // Listen for changes to the prefers-color-scheme media query
      prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));


      SplashScreen.hide().catch(error => {
        console.error(error);
      });

      StatusBar.hide().catch(error => {
        console.error(error);
      });
    });
  }

    // Add or remove the "dark" class based on if the media query matches
    toggleDarkTheme(shouldAdd) {
      document.body.classList.toggle('dark', shouldAdd);
    }
}
