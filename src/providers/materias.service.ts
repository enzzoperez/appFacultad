import { Injectable } from '@angular/core';
import { MATERIAS } from './mocks/materias.mock';

import 'rxjs/add/operator/map';

@Injectable()
export class MateriasService {
	getMaterias(){
		return MATERIAS;
	}

	getMateriaDia(dia:string):Array <any>{
		let materias = MATERIAS.filter(x => x.nombre === dia);
		console.log("MIRA LA VAGANCIA +", materias);
		return materias;
	}
}
