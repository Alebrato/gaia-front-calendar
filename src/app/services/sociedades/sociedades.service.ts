import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Sociedad } from '../../model/sociedad';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class SociedadesService {

  private sociedadesUrl = '/sociedades';
  constructor (private http: HttpClient) {}

  getAll (): Observable<Sociedad[]> {
    return this.http.get<Sociedad[]>(this.sociedadesUrl)
      .catch(this.handleError);
  }

  getId (id: string): Observable<Sociedad> {
    const url = `${this.sociedadesUrl}/${id}`;
    return this.http.get<Sociedad>(url)
      .catch(this.handleError);
  }

  save (sociedad: Sociedad): Observable<Sociedad> {
    return this.http.post<Sociedad>(this.sociedadesUrl, sociedad, cudOptions)
      .catch(this.handleError);
  }

  delete (sociedad: Sociedad | number): Observable<Sociedad> {
    const id = typeof sociedad === 'number' ? sociedad : sociedad.id;
    const url = `${this.sociedadesUrl}/${id}`;

    return this.http.delete<Sociedad>(url, cudOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
