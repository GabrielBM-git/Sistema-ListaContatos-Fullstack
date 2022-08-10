import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../../services/localStorage/localStorage.service';
import { GenericService } from '../../../services/generic/generic.service';

import { Cliente } from 'src/models/Cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  public clientes: Cliente[] = [];
  public clientesView: any[] = [];
  
  public search: string;

  //-----------------------------------------------------------------------------------------------

  constructor(private router: Router, private generics: GenericService, private session: LocalStorageService) {

    this.search = this.session.get('search');

    //---------------------------------------------------------------------------------------------

    this.Load();
  
  }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------------------------------

  Load() {

    const service$ = this.generics.getAll('Cliente/GetAll');

    service$.subscribe(

      (result: any) => {

        console.log('ClientesController-[GetAll]: ' + result);

        this.clientes = result;

        this.session.clear();
        this.session.set('clientes', this.clientes);

        //-----------------------------------------------------------------------------------------

        this.onSearch();
      
      },

      (error: any) => {

        console.error('ClientesController-[GetAll]: ' + error);
        
        this.session.clear();
        this.router.navigate(['']);

      }

    );

  }

  //-----------------------------------------------------------------------------------------------

  onSelect(id: number) {

    this.clientes.find(elem => { 
      if(elem.id == id) {
        this.session.set('cliente', elem);
        this.router.navigate(['/cliente']);
      }
    });

  }

  onSelected(id: number) {

    this.clientes.find(elem => { 
      if(elem.id == id) {
        this.session.set('cliente', elem);
        this.router.navigate(['/contatos']);
      }
    });

  }

  //-----------------------------------------------------------------------------------------------

  onSearch() {
    
    this.clientes.map(elem => { 

      if(this.search && elem.nome.toLowerCase().startsWith(this.search.toLowerCase()))
        Object.assign(elem, {active: true})
      else
        Object.assign(elem, {active: false})

      this.clientesView.push(elem);

    });
  }
}
