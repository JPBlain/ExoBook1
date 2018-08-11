import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

    constructor(private menuCtrl: MenuController){}

    onToggleMenu() {
      this.menuCtrl.open();
    }
}

// Le menu latéral sera accessible depuis les pages
// de liste et la page de réglages.
