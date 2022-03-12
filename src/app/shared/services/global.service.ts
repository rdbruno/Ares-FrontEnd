import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    configuracao: any;

    constructor( ) { }

    carregarConf(): void {
        this.configuracao = environment.config;
    }

    getConfiguracao(): any {
        return this.configuracao;
    }

}