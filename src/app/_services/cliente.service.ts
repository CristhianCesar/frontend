import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';


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
}
