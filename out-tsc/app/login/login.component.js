import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/authentification.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
import * as i4 from "@angular/forms";
function LoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r1.errorMsg);
} }
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, "Invalid username and/or password.");
    i0.ɵɵelementEnd();
} }
export class LoginComponent {
    constructor(Auth, router) {
        this.Auth = Auth;
        this.router = router;
        this.users = [];
    }
    signIn(f) {
        this.Auth.login(f).subscribe({
            next: (user) => {
                if (user)
                    console.log('goood');
                this.Auth.authentificateUser(user).subscribe({
                    next: (user) => {
                        this.router.navigate(['/admin']);
                    },
                });
            },
            error: (err) => (this.errorMsg = err),
        });
    }
    static { this.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(i0.ɵɵdirectiveInject(i1.AuthentificationService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["login"]], decls: 16, vars: 5, consts: [[1, "form-signin", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-signin-heading"], ["class", "text-danger", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "inputEmail", 1, "sr-only"], ["type", "email", "id", "inputEmail", "name", "email", "ngModel", "", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control"], ["for", "inputPassword", 1, "sr-only"], ["type", "password", "id", "inputPassword", "name", "password", "ngModel", "", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], [1, "text-danger"], [1, "alert", "alert-danger"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            const _r3 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.signIn(_r0.value)); });
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "json");
            i0.ɵɵelementStart(4, "h2", 2);
            i0.ɵɵtext(5, "Please sign in");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, LoginComponent_div_6_Template, 2, 1, "div", 3);
            i0.ɵɵtemplate(7, LoginComponent_div_7_Template, 2, 0, "div", 4);
            i0.ɵɵelementStart(8, "label", 5);
            i0.ɵɵtext(9, "Email address");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 6);
            i0.ɵɵelementStart(11, "label", 7);
            i0.ɵɵtext(12, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 8);
            i0.ɵɵelementStart(14, "button", 9);
            i0.ɵɵtext(15, "Sign in");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(3, 3, _r0.value), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.errorMsg);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.invalidLogin);
        } }, dependencies: [i3.NgIf, i4.ɵNgNoValidate, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgControlStatusGroup, i4.RequiredValidator, i4.NgModel, i4.NgForm, i3.JsonPipe], styles: [".form-signin[_ngcontent-%COMP%] {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin[_ngcontent-%COMP%]   .form-signin-heading[_ngcontent-%COMP%], .form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.form-signin[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  z-index: 2;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=\"email\"][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=\"password\"][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{ selector: 'login', template: "<form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\n  {{f.value | json}}\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n  <div class=\"text-danger\" *ngIf=\"errorMsg\">{{errorMsg}}</div>\n  <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">Invalid username and/or password.</div>\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n  <input type=\"email\" id=\"inputEmail\" name=\"email\" ngModel class=\"form-control\" placeholder=\"Email address\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"Password\" required>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>\n", styles: ["\n.form-signin {\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto;\n}\n.form-signin .form-signin-heading,\n.form-signin .checkbox {\n  margin-bottom: 10px;\n}\n.form-signin .checkbox {\n  font-weight: normal;\n}\n.form-signin .form-control {\n  position: relative;\n  height: auto;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 10px;\n  font-size: 16px;\n}\n.form-signin .form-control:focus {\n  z-index: 2;\n}\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}"] }]
    }], function () { return [{ type: i1.AuthentificationService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=login.component.js.map