import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from '../../model/credentials';
import { Observable } from 'rxjs/Observable';
import { User } from '../../model/user';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class AuthService {

  private url = '/credentials';
  constructor(private http: HttpClient, private router: Router) { }
  hasPermission(credentials: Array<string>) {
    const rolesUser: Array<string> = this.getRoles();
    if (rolesUser && rolesUser.find(rol => {
              return credentials && credentials.includes(rol);
         })) {
         return true;
    }
    return false;
}

  // Usar este cuando sea contra servidor ok.
  login2 (credentials: Credentials) {
    this.http.post(this.url, credentials, cudOptions)
    .subscribe((resp: User) => {
      localStorage.setItem('user', JSON.stringify(resp));
      this.router.navigate(['/administracion']);
    });
  }

  // Usando este para que funcione con mock
  login (credentials: Credentials) {
    this.http.get(this.url + '/1')
    .subscribe((resp: any) => {
      localStorage.setItem('user', JSON.stringify(resp));
      this.router.navigate(['/administracion']);
    });
  }

  logout() {
    localStorage.removeItem('user');
  }

  public getToken(): string {
    const user = this.getUser();
    return user == null ? '' : user.token;
  }

  public getRoles(): Array<string> {
    const user = this.getUser();
    return user == null ? [] : user.roles;
  }

  public getUser(): User {
    return localStorage.getItem('user') == null ? null : JSON.parse(localStorage.getItem('user'));
  }

  private handleError (error: any) {
    console.error(error);
    return Observable.throw(error);
  }
}
