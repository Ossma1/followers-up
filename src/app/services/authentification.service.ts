import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  users: AppUser[] = []
  AuthUser!: AppUser | undefined;
  constructor() {
    this.users.push({ userId: 1, email: "oussama", password: "1234", roles: ["admin"] })
    this.users.push({ userId: 2, email: "toumi", password: "987", roles: ["user"] })
  }
  public login(f: any): Observable<AppUser> {
    let user = this.users.find(u => u.email == f.email && u.password == f.password)
    if (!user) {
      console.log(this.users)

      return throwError(() => new Error("User not found"))
    }
    else
      return of(user)

  }
  public authentificateUser(appuser: AppUser): Observable<Boolean> {
    this.AuthUser = appuser
    localStorage.setItem("authUser", JSON.stringify({ email: appuser.email, roles: appuser.roles, jwt: "JWT_TOkEN" }))
    return of(true)
  }
  public hasRole(role : string): boolean |undefined {
    return this.AuthUser?.roles.includes(role)
  }
  public isAuthenticated() {
    return this.AuthUser != undefined
  }
  public onclick():Observable<boolean>{
    this.AuthUser = undefined

    localStorage.removeItem('authUser')
    return of(true)
  }
}
