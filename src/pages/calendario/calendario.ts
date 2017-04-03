import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html'
})
export class CalendarioPage {
  calendario:any = "clases";
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}
