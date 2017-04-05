import { Component } from '@angular/core';
import { MateriasService } from '../../providers/materias.service';


@Component({
  selector: 'page-horarios',
  templateUrl: 'horarios.html'
})
export class HorariosPage {

  dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  materiasDias: any;
  mostrar:string;
  anos:string = "1";
  constructor(public _materias: MateriasService) {}


  mostrarMateriasDias(dia:string, ano:string){
    this.materiasDias = this._materias.getMateriaDia(dia, ano);
    if (this.mostrar == dia)
      this.mostrar = "";
    else 
      this.mostrar = dia;
  }
}
