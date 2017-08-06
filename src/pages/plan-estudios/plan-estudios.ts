import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { MateriasService } from '../../providers/materias.service'; 


@Component({
  selector: 'page-plan-estudios',
  templateUrl: 'plan-estudios.html',
})
export class PlanEstudiosPage {
  
  estudio: any;

  constructor(
  	private iab: InAppBrowser, 
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private planService: MateriasService) {
    this.estudio = [];
  }

  ionViewDidLoad(){
    this.planService.getPlan().subscribe( data => {
      this.estudio = data['estudios'];
    });
  }

  openLink(url:string) {
        let browser = this.iab.create('https://docs.google.com/viewerng/viewer?url=' + url);
        browser.show();
    }
}
