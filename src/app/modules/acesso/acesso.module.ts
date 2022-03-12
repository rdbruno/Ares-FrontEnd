import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AcessoComponent } from "./acesso/acesso.component";
import { ClinicaLoginComponent } from './clinica/clinica-login/clinica-login.component';
import { ClinicaCadastroComponent } from "./clinica/clinica-cadastro/clinica-cadastro.component";
import { VetLoginComponent } from './veterinario/vet-login/vet-login.component';
import { VetCadastroComponent } from './veterinario/vet-cadastro/vet-cadastro.component';

import { SharedModule } from "src/app/shared/shared.module";
import { AcessoRoutingModule } from "./acesso-routing.module";

@NgModule({
    declarations: [
        AcessoComponent,
        ClinicaLoginComponent,
        ClinicaCadastroComponent,
        VetLoginComponent,
        VetCadastroComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        AcessoRoutingModule
    ]
})
export class AcessoModule { }