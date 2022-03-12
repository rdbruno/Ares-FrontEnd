import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalService } from "./global.service";

@Injectable({
    providedIn: 'root'
})
export class UtilApi {

    constructor(
        private globalService: GlobalService
    ) { }

    invocacaoRemotaComRetry(repetitions: number, timeout: number, objeto: any, funcao: () => any): any {
        if (repetitions > 0) {
            try {
                return funcao.call(objeto);
            } catch(error) {
                setTimeout(() => {
                    return this.invocacaoRemotaComRetry(repetitions - 1, timeout, objeto, funcao);
                }, 1000);
            }
        } else {
            return null;
        }
    }
}