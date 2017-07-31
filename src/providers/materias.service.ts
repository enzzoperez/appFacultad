import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MateriasService {
	
	constructor (public http: Http){}

	getMaterias(){
		return this.http.get('assets/data/materias.json')
			.map( res => res.json() );
	}

	getPlan(){
		return this.http.get('assets/data/plan-estudios.json')
			.map( res => res.json() ) 
	}
}
