import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthentificationService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
