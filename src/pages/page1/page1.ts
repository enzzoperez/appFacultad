import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { NavController } from 'ionic-angular';

import { HorariosPage } from '../horarios/horarios';
import { ExamenesPage } from '../examenes/examenes';
import { PlanEstudiosPage } from '../plan-estudios/plan-estudios';
import { CalendarioPage } from '../calendario/calendario';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {

	pages:Array<{title:string, component: any, icon: string}>
  
  constructor(public navCtrl: NavController, private iab:InAppBrowser) {
    this.pages = [
      { title: 'Horarios', component: HorariosPage, icon: 'clock' },
      { title: 'Exámenes', component: ExamenesPage, icon:'list-box' },
      { title: 'Calendario Académico', component: CalendarioPage, icon: 'calendar' },
      { title: 'Plan de Estudios', component: PlanEstudiosPage, icon: 'copy' },
      { title: 'Dpto. de Informática', component: AboutPage, icon: 'contacts' },
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
