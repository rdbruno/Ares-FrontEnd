import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './shared/components/menu/menu.component';
import { LoginGuard } from './shared/guards/login-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acesso' },
  {
    path: 'acesso',
    loadChildren: () => import('./modules/acesso/acesso.module').then(m => m.AcessoModule)
  },
  {
    path: 'menu',
    component: MenuComponent,
    canActivate: [ LoginGuard ],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'servicos' },
      {
        path: 'servicos',
        loadChildren: () => import('./modules/servicos/servicos.module').then(m => m.ServicosModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
