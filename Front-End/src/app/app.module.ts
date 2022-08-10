import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//-----------------------------------------------------------------------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { ClienteComponent } from './layout/cliente/cliente.component';
import { ClientesComponent } from './layout/clientes/clientes.component';

import { ContatoComponent } from './layout/contato/contato.component';
import { ContatosComponent } from './layout/contatos/contatos.component';

import { BottomComponent } from './components/bottom/bottom.component';

@NgModule({

  declarations: [

    AppComponent,

    HomeComponent,

    ClienteComponent,
    ClientesComponent,

    ContatoComponent,
    ContatosComponent,

    BottomComponent
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
