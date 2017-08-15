import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular'

import { ModalMateriaPage } from '../modal-materia/modal-materia';
import { MateriasService } from '../../providers/materias.service';


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  materias: any = [];
  materiasFiltro: any = [];
  materiasDias: any;
  mostrar:string;
  anos:string = "1";
  constructor(public _materias: MateriasService, private modalCtrl: ModalController) {}

  ionViewDidLoad(){
    this._materias.getMaterias().subscribe(data => {
      //MATERIAS 1º CUAT.
      //this.materias = data['materias'];

      //MATERIAS 2º CUAT.
      this.materias = data['materias2'];      
    });
  }


  mostrarMateriasDias(dia:string, ano:string){
    this.materiasFiltro = this.materias.filter(x => x.dia == dia && x.ano == ano);
   
    if (this.mostrar == dia)
      this.mostrar = "";
    else 
      this.mostrar = dia;
  }

  detalleMateria(materia: any){
    let modal = this.modalCtrl.create(ModalMateriaPage, {materia: materia, lista: this.materias});
    modal.present();
  }
}
