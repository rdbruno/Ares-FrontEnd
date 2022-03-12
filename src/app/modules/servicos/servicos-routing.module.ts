import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ServicoListComponent } from "./servico-list/servico-list.component";

const routes: Routes = [
    { path: '', component: ServicoListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServicosRoutingModule { }