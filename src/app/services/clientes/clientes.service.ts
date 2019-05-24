import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../../model/cliente';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
  export class ClientesService {

    private clientesUrl = '/clientes';
    constructor (private http: HttpClient) {}

    getAll (): Observable<Cliente[]> {
      // console.log(this.http.get<Empleado[]>(this.empleadosUrl));
      return this.http.get<Cliente[]>(this.clientesUrl)
        .catch(this.handleError);
    }

    getId (cp: string): Observable<Cliente> {
      const url = `${this.clientesUrl}/${cp}`;
      return this.http.get<Cliente>(url)
        .catch(this.handleError);
    }

    save (empleado: Cliente): Observable<Cliente> {
      return this.http.post<Cliente>(this.clientesUrl, empleado, cudOptions)
        .catch(this.handleError);
    }

    delete (empleado: Cliente | number): Observable<Cliente> {
      const id = typeof empleado === 'number' ? empleado : empleado.id;
      const url = `${this.clientesUrl}/${id}`;

      return this.http.delete<Cliente>(url, cudOptions)
        .catch(this.handleError);
    }

    private handleError (error: any) {
      console.error(error);
      return Observable.throw(error);
    }
  }
