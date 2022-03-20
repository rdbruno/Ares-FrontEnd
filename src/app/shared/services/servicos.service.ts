import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GlobalService } from "./global.service";

import { Servico } from "../models/servico.model";

@Injectable()
export class ServicosService {

    private httpOptions = {
        headers: new HttpHeaders({
            "Authorization": "Token " + localStorage.getItem('token')
        })
    }

    constructor(
        private http: HttpClient,
        private globalService: GlobalService
    ) { }
    
    public cadastrarServico(servico: any): Observable<any> {
        return this.http.post(`${this.globalService.getConfiguracao().urlApi}/cadastroServico`, servico, this.httpOptions);
    }

    public buscaServicoByUser(pageNumber: number, rowsPage: number): Observable<any> {
        return this.http.get(`${this.globalService.getConfiguracao().urlApi}/servicosAutoRegistrados?pageNumber=${pageNumber}&rowspPage=${rowsPage}`, this.httpOptions);
    }

    public buscaServicosDisponiveis(pageNumber: number, rowsPage: number): Observable<any> {
        return this.http.get(`${this.globalService.getConfiguracao().urlApi}/servicos?pageNumber=${pageNumber}&rowspPage=${rowsPage}`, this.httpOptions);
    }

}