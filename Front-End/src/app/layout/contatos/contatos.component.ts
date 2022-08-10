import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from '../../../services/localStorage/localStorage.service';
import { GenericService } from '../../../services/generic/generic.service';

import { Cliente } from 'src/models/Cliente';
import { Contato } from 'src/models/Contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})

export class ContatosComponent implements OnInit {

  public clientes: Cliente[];
  public cliente: Cliente;

  public modelForm: FormGroup;

  //-----------------------------------------------------------------------------------------------

  constructor(private fb: FormBuilder, private router: Router, private generics: GenericService, private session: LocalStorageService) {

    this.clientes = this.session.get('clientes');
    this.cliente = this.session.get('cliente');

    this.session.remove('contato');

    if(this.cliente === null)
      this.cliente = new Cliente();

    //---------------------------------------------------------------------------------------------

    this.modelForm = this.fb.group({
      nome: [ '', Validators.required ]
    });

    //---------------------------------------------------------------------------------------------

    this.Load();
    this.Loading();

  }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------------------------------

  Load() {

    const service$ = this.generics.getAll('Cliente/GetAll');

    service$.subscribe(

      (result: any) => {

        console.log('ContatosController-[GetAll]: ' + result);
        
        this.clientes = result;
        
        this.session.set('clientes', this.clientes);
      },

      (error: any) => {
        console.error('ContatosController-[GetAll]: ' + error);
      }

    );

  }

  Loading() {

    if(this.cliente.id === 0)
      this.Load_NotCliente();

    else
      this.Load_ClienteId();

  }

  Load_NotCliente() {

    const service$ = this.generics.getAll('Contato/GetAll_NotCliente');

    service$.subscribe(

      (result: any) => {
        
        console.log('ContatosController-[GetAll_NotCliente]: ' + result);

        this.cliente.contatos = result;
      },

      (error: any) => {
        
        console.error('ContatosController-[GetAll_NotCliente]: ' + error);
        
        this.router.navigate(['']);
      }

    );
  }

  Load_ClienteId() {

    const service$ = this.generics.get('Contato/GetAll_ClienteId', this.cliente.id);

    service$.subscribe(

      (result: any) => {
        
        console.log('ContatosController-[GetAll_ClienteId]: ' + result);
        
        this.cliente.contatos = result;
      },

      (error: any) => {
        
        console.error('ContatosController-[GetAll_ClienteId]: ' + error);
        
        this.router.navigate(['']);
      }

    );
  }

  //-----------------------------------------------------------------------------------------------

  onSelect(id: number) {

    this.cliente.contatos.find(elem => { 
      if(elem.id == id) {
        this.session.set('contato', elem);
        this.router.navigate(['/contato']);
      }
    });

  }

  onSelected(event: any) {

    this.cliente = new Cliente();

    this.clientes.find(elem => { 
      if(elem.id == event.value) {
        this.cliente = elem;
        this.session.set('cliente', this.cliente);
      }
    });

    if(event.value == 0)
    {
      this.session.set('cliente', this.cliente);
      this.Load_ClienteId();
    }
  }

}