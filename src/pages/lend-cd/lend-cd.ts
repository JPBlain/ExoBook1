import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

import { Item } from '../../models/Item';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html'
})
export class LendCdPage implements OnInit {
  index: number;
  disk: Item;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController,
              private itemsService: ItemsService) {}

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.disk = this.itemsService.diskList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onLend() {
    this.itemsService.changeStatus('disks',this.index);
    this.dismissModal();
  }

}

// Les pages de liste passeront les informations nécessaires
// à la page de prêt correspondante.

// Les pages de prêt auront un bouton pour prêter l'élément,
// un autre pour le rendre. Ces boutons seront activés ou
// désactivés selon l'état actuel de l'élément.
// Par exemple : si le livre choisi est prêté, seul le bouton
// "rendre" sera actif et vice versa.
