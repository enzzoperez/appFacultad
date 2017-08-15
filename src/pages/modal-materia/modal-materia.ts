import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal-materia',
  templateUrl: 'modal-materia.html'
})
export class ModalMateriaPage {

  materia: any;
  lista: any;
  materiaFiltro: any;
  constructor(
  	public navParams: NavParams, 
  	public viewCtrl: ViewController){
  	this.materia = this.navParams.get('materia');
  	this.lista = this.navParams.get('lista');
  }
	ionViewDidLoad(){
		this.filtroMateria(this.materia.nombre);
	}
  	
	filtroMateria(nombreMateria: any){
		this.materiaFiltro = this.lista.filter(x => x.nombre == nombreMateria);
	}

  	dismissModal(){
  		this.viewCtrl.dismiss();
  	}
}
