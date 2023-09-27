import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, NgModel } from '@angular/forms';
import { AppUser } from '../models/user.model';
import { Observable, of, throwError } from 'rxjs';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  invalidLogin!: boolean;
  users: AppUser[] = [];
  errorMsg: any;
  constructor(private Auth: AuthentificationService, private router: Router) {}

  signIn(f: any) {
    this.Auth.login(f).subscribe({
      next: (user) => {
        if (user) console.log('goood');
        this.Auth.authentificateUser(user).subscribe({
          next: (user) => {
            this.router.navigate(['/admin'])
          },
        });
      },
      error: (err) => (this.errorMsg = err),
    });
  }
}
