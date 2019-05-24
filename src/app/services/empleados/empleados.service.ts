import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empleado } from '../../model/empleado';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
  export class EmpleadosService {

    private empleadosUrl = '/empleados';
    constructor (private http: HttpClient) {}

    getAll (): Observable<Empleado[]> {
      // console.log(this.http.get<Empleado[]>(this.empleadosUrl));
      return this.http.get<Empleado[]>(this.empleadosUrl)
        .catch(this.handleError);
    }

    getId (cp: string): Observable<Empleado> {
      const url = `${this.empleadosUrl}/${cp}`;
      return this.http.get<Empleado>(url)
        .catch(this.handleError);
    }

    save (empleado: Empleado): Observable<Empleado> {
      return this.http.post<Empleado>(this.empleadosUrl, empleado, cudOptions)
        .catch(this.handleError);
    }

    delete (empleado: Empleado | number): Observable<Empleado> {
      const id = typeof empleado === 'number' ? empleado : empleado.id;
      const url = `${this.empleadosUrl}/${id}`;

      return this.http.delete<Empleado>(url, cudOptions)
        .catch(this.handleError);
    }

    private handleError (error: any) {
      console.error(error);
      return Observable.throw(error);
    }
  }

