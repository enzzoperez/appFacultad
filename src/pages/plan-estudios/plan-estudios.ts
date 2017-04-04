import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ESTUDIOS } from '../../providers/mocks/plan-estudios.mock'

@Component({
  selector: 'page-plan-estudios',
  templateUrl: 'plan-estudios.html',
})
export class PlanEstudiosPage {
  
  estudio: any;
  constructor(
  	private iab: InAppBrowser, 
  	public navCtrl: NavController, 
  	public navParams: NavParams) {}

  ionViewDidLoad(){
  	this.estudio = ESTUDIOS;
  }

  openLink(url:string) {
        let browser = this.iab.create(url);
        browser.show();
    }
}
