import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './layout/cliente/cliente.component';
import { ClientesComponent } from './layout/clientes/clientes.component';

import { ContatoComponent } from './layout/contato/contato.component';
import { ContatosComponent } from './layout/contatos/contatos.component';

const routes: Routes = [

    { path: '', redirectTo: '/clientes', pathMatch: 'full' },
      
    { path: 'clientes', component: ClientesComponent },
    
    { path: 'cliente', component: ClienteComponent },

    { path: 'contatos', component: ContatosComponent },

    { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
