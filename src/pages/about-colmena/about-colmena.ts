import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser'


@Component({
  selector: 'page-about-colmena',
  templateUrl: 'about-colmena.html'
})
export class AboutColmenaPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public alertCtrl: AlertController,
  	private iab: InAppBrowser){}

  	openLink(url:string){
  		let browser = this.iab.create(url);
  		browser.show();
  	}
}
