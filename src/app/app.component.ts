import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';
import { HorariosPage } from '../pages/horarios/horarios';
import { ExamenesPage } from '../pages/examenes/examenes';
import { PlanEstudiosPage } from '../pages/plan-estudios/plan-estudios';
import { CalendarioPage } from '../pages/calendario/calendario';


@Component({
  selector:'ion-app',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Page1;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private iab:InAppBrowser) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Horarios', component: HorariosPage },
      { title: 'Examenes', component: ExamenesPage },
      { title: 'Calendario Acad.', component: CalendarioPage },
      { title: 'Plan de Estudios', component: PlanEstudiosPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  openLink(url:string){
    let browser = this.iab.create(url);
    browser.show();
  }
}
