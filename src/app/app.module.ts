import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CommonModule} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import {UserModule} from "./user/user.module";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { InvestimentoEffects } from "./redux/effects/investimento-effects"
import { investimentoReducer } from "./redux/reducres/investimento-reducer"
import {HttpClientModule} from "@angular/common/http";
import {InMemoryInvestimentoService} from "./in-memory-investimento-service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryInvestimentoService, { delay: 1500 }),


    EffectsModule.forRoot([InvestimentoEffects]),
    StoreModule.forRoot({
      investimento: investimentoReducer
    })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
