import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AcessoComponent } from "./acesso/acesso.component";

const routes: Routes = [
    { path: '', component: AcessoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcessoRoutingModule { }