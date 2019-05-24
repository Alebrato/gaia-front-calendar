import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Oficina } from '../../model/oficina';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class OficinasService {

  private oficinasUrl = '/oficinas';
  constructor (private http: HttpClient) {}

  getAll (): Observable<Oficina[]> {
    // console.log(this.http.get<Oficina[]>(this.oficinasUrl));
    return this.http.get<Oficina[]>(this.oficinasUrl)
      .catch(this.handleError);
  }

  getId (id: string): Observable<Oficina> {
    const url = `${this.oficinasUrl}/${id}`;
    return this.http.get<Oficina>(url)
      .catch(this.handleError);
  }

  save (oficina: Oficina): Observable<Oficina> {
    return this.http.post<Oficina>(this.oficinasUrl, oficina, cudOptions)
      .catch(this.handleError);
  }

  delete (oficina: Oficina | number): Observable<Oficina> {
    const id = typeof oficina === 'number' ? oficina : oficina.id;
    const url = `${this.oficinasUrl}/${id}`;

    return this.http.delete<Oficina>(url, cudOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
