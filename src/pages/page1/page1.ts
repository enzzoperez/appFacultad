import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NavController } from 'ionic-angular';

import { HorariosPage } from '../horarios/horarios';
import { ExamenesPage } from '../examenes/examenes';
import { PlanEstudiosPage } from '../plan-estudios/plan-estudios';
import { CalendarioPage } from '../calendario/calendario';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {

	pages:Array<{title:string, component: any}>
  
  constructor(public navCtrl: NavController, private iab:InAppBrowser) {
    this.pages = [
      { title: 'Horarios', component: HorariosPage },
      { title: 'Examenes', component: ExamenesPage },
      { title: 'Calendario Académico', component: CalendarioPage },
      { title: 'Plan de Estudios', component: PlanEstudiosPage },
    ];
  }

  openPage(page){
  	this.navCtrl.push(page.component);
  }
  openLink(url:string){
    let browser = this.iab.create(url);
    browser.show();
  }
}
