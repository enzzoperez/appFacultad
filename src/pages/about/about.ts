import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public alertCtrl: AlertController){}

}
