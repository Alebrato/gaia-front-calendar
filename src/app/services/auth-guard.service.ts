import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Credentials } from '../model/credentials';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(protected router: Router,
          protected authService: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot): Promise<boolean> | boolean {
          return this.hasRequiredPermission(route.data['roles']);
    }
    protected hasRequiredPermission(credentials: Array<string>): Promise<boolean> | boolean {
          // If user’s permissions already retrieved from the API
        if (credentials) {
            return this.authService.hasPermission(credentials);
        } else {
            return true;
        }
    }
}
