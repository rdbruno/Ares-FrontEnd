import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PerfilComponent } from './perfil/perfil.component';
import { ClinicaPerfilComponent } from './clinica-perfil/clinica-perfil.component';
import { VetPerfilComponent } from './vet-perfil/vet-perfil.component';

import { SharedModule } from "src/app/shared/shared.module";
import { PerfilRoutingModule } from "./perfil-routing.module";

@NgModule({
    declarations: [
      PerfilComponent,
      ClinicaPerfilComponent,
      VetPerfilComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        PerfilRoutingModule
    ]
})
export class PerfilModule { }