import { Injectable } from '@angular/core';
import { MATERIAS } from '../assets/data/materias';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MateriasService {
	
	constructor (public http: Http){}

	getMaterias(){
		return MATERIAS;
	}

	getMateriaDia(dia:string, ano:string):Array <any>{
		let materias = MATERIAS.filter(x => x.dia == dia && x.ano == ano);
		
		return materias;
	}

	getPlan(){
		return this.http.get('../assets/data/plan-estudios.json')
		.map( res => res.json() ) 
	}
}
