import { Component } from '@angular/core';

import { Platform, ActionSheetController } from 'ionic-angular';


@Component({
  templateUrl: 'hello-ionic.html',
  host: {
    class: 'hello-ionic-page'
  }
})
export class HelloIonicPage {

    slideOptions = {
        pager: true,
        effect: 'coverflow',
        coverflow: {
          rotate: 10,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : false
        }
    };

    constructor(
        public actionSheetCtrl: ActionSheetController,
        public platform: Platform
    ) {

    }

    openMenu() {
    let actionSheet = this.actionSheetCtrl.create({
      //title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Sincronizar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'refresh' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Sobre esse aplicativo',
          icon: !this.platform.is('ios') ? 'phone-portrait' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
