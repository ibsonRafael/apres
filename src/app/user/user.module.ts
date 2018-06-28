import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import {AuthGuard} from "./auth.guard";
import {AuthService} from "./auth.service";
import {TemPerfilGuard} from "./tem-perfil.guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService,

    AuthGuard,
    TemPerfilGuard
  ]
})
export class UserModule { }
