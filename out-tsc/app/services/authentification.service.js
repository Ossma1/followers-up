import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import * as i0 from "@angular/core";
export class AuthentificationService {
    constructor() {
        this.users = [];
        this.users.push({ userId: 1, email: "oussama", password: "1234", roles: ["admin"] });
        this.users.push({ userId: 2, email: "toumi", password: "987", roles: ["user"] });
    }
    login(f) {
        let user = this.users.find(u => u.email == f.email && u.password == f.password);
        if (!user) {
            console.log(this.users);
            return throwError(() => new Error("User not found"));
        }
        else
            return of(user);
    }
    authentificateUser(appuser) {
        this.AuthUser = appuser;
        localStorage.setItem("authUser", JSON.stringify({ email: appuser.email, roles: appuser.roles, jwt: "JWT_TOkEN" }));
        return of(true);
    }
    hasRole(role) {
        return this.AuthUser?.roles.includes(role);
    }
    isAuthenticated() {
        return this.AuthUser != undefined;
    }
    onclick() {
        this.AuthUser = undefined;
        localStorage.removeItem('authUser');
        return of(true);
    }
    static { this.ɵfac = function AuthentificationService_Factory(t) { return new (t || AuthentificationService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthentificationService, factory: AuthentificationService.ɵfac, providedIn: 'root' }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthentificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=authentification.service.js.map