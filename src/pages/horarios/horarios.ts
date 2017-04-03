import { Component } from '@angular/core';
import { MateriasService } from '../../providers/materias.service';


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  materias: any;
  constructor(public _materias: MateriasService) {}

  ionViewDidLoad(){
  	this.materias=this._materias.getMateriaDia('Lunes - T');

  	for(let data of this.materias) {
		console.log('Cualquiera: ', data);
	}
  	console.log('MABE: ');
  	
  }

  // clasesMartes:Array <any> = this.materias.getMateriaDia('Martes');
  // clasesMiercoles:Array <any> = this.materias.getMateriaDia('Miercoles');
  // clasesJueves:Array <any> = this.materias.getMateriaDia('Jueves');
  // clasesViernes:Array <any> = this.materias.getMateriaDia('Viernes');

}
