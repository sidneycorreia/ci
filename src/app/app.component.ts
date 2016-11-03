import { Component, ViewChild } from '@angular/core';

import { Platform, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  //@ViewChild(HelloIonicPage) helloIonicPage: HelloIonicPage;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      StatusBar.overlaysWebView(true); // let status bar overlay webview
      StatusBar.backgroundColorByHexString('#A9A9A9'); // set status bar to white

      this.hideSplashScreen();
    });
  }

  hideSplashScreen() {
      if (Splashscreen) {
          setTimeout(() => {
              Splashscreen.hide();
          }, 100);
      }
  }

  openPage(page) {
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

}
