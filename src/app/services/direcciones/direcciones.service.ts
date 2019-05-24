import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Direccion } from '../../model/direccion';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};


@Injectable()
  export class DireccionesService {

    private direccionesUrl = '/direcciones';
    constructor (private http: HttpClient) {}

    getAll (): Observable<Direccion[]> {
      // console.log(this.http.get<Direccion[]>(this.direccionesUrl));
      return this.http.get<Direccion[]>(this.direccionesUrl)
        .catch(this.handleError);
    }

    getId (cp: string): Observable<Direccion> {
      const url = `${this.direccionesUrl}/${cp}`;
      return this.http.get<Direccion>(url)
        .catch(this.handleError);
    }

    save (direccion: Direccion): Observable<Direccion> {
      return this.http.post<Direccion>(this.direccionesUrl, direccion, cudOptions)
        .catch(this.handleError);
    }

    delete (direccion: Direccion | number): Observable<Direccion> {
      const id = typeof direccion === 'number' ? direccion : direccion.id;
      const url = `${this.direccionesUrl}/${id}`;

      return this.http.delete<Direccion>(url, cudOptions)
        .catch(this.handleError);
    }

    private handleError (error: any) {
      console.error(error);
      return Observable.throw(error);
    }
  }
