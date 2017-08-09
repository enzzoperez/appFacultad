import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about-colmena',
  templateUrl: 'about-colmena.html'
})
export class AboutColmenaPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public alertCtrl: AlertController){}

}
