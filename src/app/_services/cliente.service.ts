import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';


@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	private urlAPI: string = environment.urlBackend;

	constructor(private http: Http) { }

	findAll() {
		let auxURL = this.urlAPI +'/clientes';

		return this.http.get( auxURL ).pipe(map( result => result.json()));
	}

	findOne( cliente ) {
		let auxURL = this.urlAPI +'/clientes/'+ cliente.id;

		return this.http.get( auxURL ).pipe(map( result => result.json()));
	}

	save( cliente ) {
		let auxURL = this.urlAPI +'/clientes';

		if ( cliente.id ) {
			auxURL += '/'+ cliente.id;
			return this.http.put( auxURL, cliente ).pipe(map( result => result.json()));
		} else {
			return this.http.post( auxURL, cliente ).pipe(map( result => result.json()));
		}
	}

	destroy( cliente ) {
		let auxURL = this.urlAPI +'/clientes/'+ cliente.id;

		return this.http.delete( auxURL ).pipe(map( result => result.json()));
	}
}
