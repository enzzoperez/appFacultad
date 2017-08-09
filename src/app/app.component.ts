import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Page1 } from '../pages/page1/page1';
import { HorariosPage } from '../pages/horarios/horarios';
import { ExamenesPage } from '../pages/examenes/examenes';
import { PlanEstudiosPage } from '../pages/plan-estudios/plan-estudios';
import { CalendarioPage } from '../pages/calendario/calendario';
import { AboutPage } from '../pages/about/about';
import { AboutColmenaPage } from '../pages/about-colmena/about-colmena';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';



@Component({
  selector:'ion-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform, 
    private iab:InAppBrowser,
    private adMobFree: AdMobFree) {
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Horarios', component: HorariosPage, icon: 'clock' },
      { title: 'Exámenes', component: ExamenesPage, icon:'list-box' },
      { title: 'Calendario Académico', component: CalendarioPage, icon: 'calendar' },
      { title: 'Plan de Estudios', component: PlanEstudiosPage, icon: 'copy' },
      { title: 'Dpto. de Informática', component: AboutPage, icon: 'contacts' },
      { title: 'Acerca de Colmena', component: AboutColmenaPage, icon: 'globe' },
    ];

  }
  
  // showBanner() {
  //   try {
  //     const bannerConfig: AdMobFreeBannerConfig = {
  //       isTesting: false,
  //       autoShow: true,
  //       id: "ca-app-pub-5243900877967265/8364961790"
  //     }

  //     this.adMobFree.banner.config(bannerConfig);

  //     this.adMobFree.banner.prepare();

  //     this.adMobFree.banner.show();
  //   }
  //   catch (e) {
  //     console.error(e);
  //   }
  // }

  openPage(page) {
    //this.showBanner();
    this.nav.push(page.component);
  }

  openLink(url:string){
    let browser = this.iab.create(url);
    browser.show();
  }
}
