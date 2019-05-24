import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {AlertService} from '../services/alert.service';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';

@Injectable()
export class CustomHttpClient {

  constructor(private http: HttpClient,
              private alertService: AlertService,
              private router: Router) {}

  static createCustomHeaders() {
   /* let user = JSON.parse(sessionStorage.getItem("currentUser"));
    let headers = new HttpHeaders();
    headers.append('x-auth-token', user == null ? "" : user.token);
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;*/
    const user = JSON.parse(sessionStorage.getItem('currentUser'));
    return new HttpHeaders({'x-auth-token' : user == null ? '' : user.token});
  }

  get<T>(url) {
    return this.http.get(url, {
      headers: CustomHttpClient.createCustomHeaders()
    }).catch((err: HttpErrorResponse) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.alertService.error(err.error.message);
        }

        return new EmptyObservable();
      }
    );
  }

  post<T>(url, data) {
    return this.http.post<any>(url, data, {
      headers: CustomHttpClient.createCustomHeaders()
    }).catch((err: HttpErrorResponse) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.alertService.error(err.error.message);
        }

        return new EmptyObservable();
      }
    );
  }

  delete<T>(url) {
    return this.http.delete<any>(url, {
      headers: CustomHttpClient.createCustomHeaders()
    }).catch((err: HttpErrorResponse) => {
        if (err.status === 403 || err.status === 401) {
          this.router.navigate(['/login']);
        } else {
          this.alertService.error(err.error.message);
        }

        return new EmptyObservable();
      }
    );
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }
}
