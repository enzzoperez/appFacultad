import { Component } from '@angular/core';
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
  constructor(public _materias: MateriasService) {}

  ionViewDidLoad(){
    this._materias.getMaterias().subscribe(data => {
      this.materias = data['materias'];
    });
  }


  mostrarMateriasDias(dia:string, ano:string){
    this.materiasFiltro = this.materias.filter(x => x.dia == dia && x.ano == ano);
    if (this.mostrar == dia)
      this.mostrar = "";
    else 
      this.mostrar = dia;
  }
}
