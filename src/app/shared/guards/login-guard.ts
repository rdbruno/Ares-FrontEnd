import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {

    constructor(
        protected router: Router
    ) { }

    verificarAcesso(state: string): Observable<boolean> | boolean {
        if ((!localStorage.getItem('UserID')) || (!localStorage.getItem('UserDocument'))) {
            this.router.navigate(['/acesso']);
            return false;
        }
        return true;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.verificarAcesso(state.url);
    }

    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        return this.verificarAcesso(route.path!);
    }

}