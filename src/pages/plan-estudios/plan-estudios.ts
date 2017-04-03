import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ESTUDIOS } from '../../providers/mocks/plan-estudios.mock'

/*
  Generated class for the PlanEstudios page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-plan-estudios',
  templateUrl: 'plan-estudios.html'
})
export class PlanEstudiosPage {
  
  estudio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}


  
  ionViewDidLoad(){
  	this.estudio = ESTUDIOS;
  }
}
