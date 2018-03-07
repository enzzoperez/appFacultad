import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { NavController, AlertController, Platform } from 'ionic-angular';

import { HorariosPage } from '../horarios/horarios';
import { ExamenesPage } from '../examenes/examenes';
import { PlanEstudiosPage } from '../plan-estudios/plan-estudios';
import { CalendarioPage } from '../calendario/calendario';
import { AboutPage } from '../about/about';

// import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1 {

  horarios = { title: 'Horarios', component: HorariosPage, 'icon': 'clock' };
  examenes = { title: 'Exámenes', component: ExamenesPage, icon:'list-box' };
  calendario = { title: 'Calendario Académico', component: CalendarioPage, icon: 'calendar' };
  plan = { title: 'Plan de Estudios', component: PlanEstudiosPage, icon: 'copy' };
  dpto = { title: 'Dpto. de Informática', component: AboutPage, icon: 'contacts' };
  
  constructor(
    public navCtrl: NavController, 
    private iab:InAppBrowser,
    public splashScreen: SplashScreen,
    public platform: Platform,
    private alertCtrl: AlertController
    // private adMobFree: AdMobFree
    ) {
  }

  ionViewDidLoad(){
    //FOR PRODUCTION UNCOMMENT THIS
    //this.showBanner();
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

  openPage(page){
    //this.showBanner();
  	this.navCtrl.push(page);
  }
  openLink(url:string){
    let browser = this.iab.create(url);
    browser.show();
  }
}
