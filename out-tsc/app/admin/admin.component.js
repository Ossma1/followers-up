import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as i0 from "@angular/core";
import * as i1 from "../services/authentification.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common";
function AdminComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, "Navbar");
    i0.ɵɵelementEnd();
} }
export class AdminComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.backroundEnv = environment.navColors;
    }
    onclick() {
        this.auth.onclick().subscribe({
            next: () => {
                this.router.navigate(['']);
            }
        });
    }
    static { this.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(i0.ɵɵdirectiveInject(i1.AuthentificationService), i0.ɵɵdirectiveInject(i2.Router)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminComponent, selectors: [["app-admin"]], decls: 9, vars: 3, consts: [[1, "navbar", "nnavbar-expand-lg", "navbar-dark", "bg-fark"], [1, "countainer-fluid"], ["href", "#", "class", "navbar-brand", "style", "color: black;", 4, "ngIf"], ["type", "button", "data-bs-toggle", "coollapse", 2, "color", "black", 3, "click"], ["href", ""], ["href", "#", 1, "navbar-brand", 2, "color", "black"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "div", 1);
            i0.ɵɵtemplate(2, AdminComponent_a_2_Template, 2, 0, "a", 2);
            i0.ɵɵelementStart(3, "button", 3);
            i0.ɵɵlistener("click", function AdminComponent_Template_button_click_3_listener() { return ctx.onclick(); });
            i0.ɵɵtext(4, "log Out");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "a", 4);
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(7, "router-outlet");
            i0.ɵɵtext(8);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.auth.hasRole("admin"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.auth.AuthUser == null ? null : ctx.auth.AuthUser.email);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("\n", ctx.backroundEnv, "\n");
        } }, dependencies: [i3.NgIf, i2.RouterOutlet] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminComponent, [{
        type: Component,
        args: [{ selector: 'app-admin', template: "<nav class=\"navbar nnavbar-expand-lg navbar-dark bg-fark\">\n<div class=\"countainer-fluid\">\n  <a *ngIf=\"auth.hasRole('admin')\" href=\"#\" class=\"navbar-brand\" style=\"color: black;\">Navbar</a>\n  <button  (click)=\"onclick()\" type=\"button\" style=\"color: black;\" data-bs-toggle=\"coollapse\">log Out</button>\n  <a href=\"\" >{{auth.AuthUser?.email}}</a>\n</div>\n\n</nav>\n<router-outlet></router-outlet>\n{{backroundEnv}}\n" }]
    }], function () { return [{ type: i1.AuthentificationService }, { type: i2.Router }]; }, null); })();
//# sourceMappingURL=admin.component.js.map