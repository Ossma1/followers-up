import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuardService } from './guards/auth.guard';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule, bootstrap: [AppComponent] }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [AuthGuardService], imports: [BrowserModule,
            FormsModule,
            HttpClientModule,
            AppRoutingModule,
            RouterModule.forRoot([
                { path: '', component: LoginComponent },
                { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], children: [
                        { path: 'products', component: LoginComponent }
                    ] },
            ]),
            NgbModule] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    AppComponent,
                    LoginComponent,
                    AdminComponent
                ],
                imports: [
                    BrowserModule,
                    FormsModule,
                    HttpClientModule,
                    AppRoutingModule,
                    RouterModule.forRoot([
                        { path: '', component: LoginComponent },
                        { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], children: [
                                { path: 'products', component: LoginComponent }
                            ] },
                    ]),
                    NgbModule
                ],
                providers: [AuthGuardService],
                bootstrap: [AppComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { declarations: [AppComponent,
        LoginComponent,
        AdminComponent], imports: [BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule, i1.RouterModule, NgbModule] }); })();
//# sourceMappingURL=app.module.js.map