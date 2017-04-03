import { Injectable } from '@angular/core';
import { MATERIAS } from './mocks/materias.mock';

import 'rxjs/add/operator/map';

@Injectable()
export class MateriasService {
	getMaterias(){
		return MATERIAS;
	}

	getMateriaDia(dia:string):Array <any>{
		let materias = MATERIAS.filter(x => x.horarios.filter(h=>h.dia === dia));
		for(let data of materias) {
			console.log('UNA MATERIA-->', materias;
		}
		return materias;
	}
}
