import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServicoListComponent } from './servico-list/servico-list.component';
import { ClinicaServicosComponent } from './clinica/clinica-servicos/clinica-servicos.component';
import { ClinicaControleComponent } from './clinica/clinica-controle/clinica-controle.component';
import { VetServicosComponent } from './veterinario/vet-servicos/vet-servicos.component';
import { VetControleComponent } from './veterinario/vet-controle/vet-controle.component';
import { ServicosFormDialogComponent } from './servicos-form-dialog/servicos-form-dialog.component';

import { SharedModule } from "src/app/shared/shared.module";
import { ServicosRoutingModule } from "./servicos-routing.module";

@NgModule({
    declarations: [  
    ClinicaServicosComponent,
    ClinicaControleComponent,
    VetServicosComponent,
    VetControleComponent,
    ServicosFormDialogComponent,
    ServicoListComponent 
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicosRoutingModule
  ]
})
export class ServicosModule { }