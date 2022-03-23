import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { GlobalService } from "./global.service";

import { Servico } from "../models/servico.model";

@Injectable()
export class ServicosService {

    constructor(
        private http: HttpClient,
        private globalService: GlobalService
    ) { }
    
    public cadastrarServico(servico: any): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Authorization": "Token " + localStorage.getItem('token')
            })
        }

        return this.http.post(`${this.globalService.getConfiguracao().urlApi}/cadastroServico`, servico, httpOptions);
    }

    public buscaServicoByUser(pageNumber: number, rowsPage: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Authorization": "Token " + localStorage.getItem('token')
            })
        }

        return this.http.get(`${this.globalService.getConfiguracao().urlApi}/servicosAutoRegistrados?pageNumber=${pageNumber}&rowspPage=${rowsPage}`, httpOptions);
    }

    public buscaServicosDisponiveis(pageNumber: number, rowsPage: number): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                "Authorization": "Token " + localStorage.getItem('token')
            })
        }

        return this.http.get(`${this.globalService.getConfiguracao().urlApi}/servicos?pageNumber=${pageNumber}&rowspPage=${rowsPage}`, httpOptions);
    }

}