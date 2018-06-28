import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShellComponent} from "./shell/shell.component";
import {HomeComponent} from "./home/home.component";
import {TemPerfilGuard} from "./user/tem-perfil.guard";
import {AuthGuard} from "./user/auth.guard";
import {LoginComponent} from "./user/login/login.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '',  redirectTo: 'shell/home', pathMatch: 'full', canActivate: [AuthGuard]},
  {
    path: 'shell', component: ShellComponent, canActivate: [AuthGuard],
    children: [
      {path: 'home',  component: HomeComponent, canActivate: [AuthGuard]},
      {path: 'acoes', loadChildren:'./acoes/acoes.module#AcoesModule', canActivate: [AuthGuard, TemPerfilGuard]},
      {path: 'fundos', loadChildren:'./fundos/fundos.module#FundosModule', canActivate: [AuthGuard, TemPerfilGuard]},
      {path: 'investimentos', loadChildren:'./investimentos/investimentos.module#InvestimentosModule', canActivate: [AuthGuard, TemPerfilGuard]},
      {path: 'perfil', loadChildren:'./perfil/perfil.module#PerfilModule', canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
