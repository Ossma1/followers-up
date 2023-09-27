import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/authentification.service";
import * as i2 from "@angular/router";
export class AuthGuardService {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate() {
        if (!this.auth.isAuthenticated()) {
            this.router.navigateByUrl('');
            return false;
        }
        return true;
    }
    static { this.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(i0.ɵɵinject(i1.AuthentificationService), i0.ɵɵinject(i2.Router)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthGuardService, factory: AuthGuardService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthGuardService, [{
        type: Injectable
    }], function () { return [{ type: i1.AuthentificationService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=auth.guard.js.map