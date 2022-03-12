import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GlobalService } from "./global.service";

import { Clinica } from "../models/clinica.model";
import { Veterinario } from "../models/veterinario.model";
import { UserLogin } from "../models/user-login.model";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private globalService: GlobalService
    ) { }

    public cadastrarClinica(clinica: Clinica): Observable<any> {
        return this.http.post(`${this.globalService.getConfiguracao().urlApi}/cadastroUsuarioClinica/`, clinica);
    }

    public cadastrarVeterinario(veterinario: Veterinario): Observable<any> {
        return this.http.post(`${this.globalService.getConfiguracao().urlApi}/cadastroUsuarioVeterinario`, veterinario);
    }

    public login(userLogin: UserLogin): Observable<any> {
        return this.http.post(`${this.globalService.getConfiguracao().urlApi}/login`, userLogin);
    }

}