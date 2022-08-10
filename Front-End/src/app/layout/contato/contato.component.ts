import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from '../../../services/localStorage/localStorage.service';
import { GenericService } from '../../../services/generic/generic.service';

import { Contato } from 'src/models/Contato';
import { Cliente } from 'src/models/Cliente';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {

  public clientes: Cliente[];
  public cliente: Cliente;
  public contato: Contato;

  public modelForm: FormGroup;

  //-----------------------------------------------------------------------------------------------

  constructor(private fb: FormBuilder, private router: Router, private generics: GenericService, private session: LocalStorageService) {

    this.clientes = this.session.get('clientes');
    this.cliente = this.session.get('cliente');
    this.contato = this.session.get('contato');

    if(this.cliente === null)
      this.cliente = new Cliente();

    if(this.contato === null)
      this.contato = new Contato();

    //---------------------------------------------------------------------------------------------

    this.modelForm = this.fb.group({
      nome: [ this.contato?.nome, Validators.required ],
      email: [ this.contato?.email, Validators.required ],
      telefone: [ this.contato?.telefone, Validators.required ],
      whatsApp: [ this.contato?.whatsApp, Validators.required ]
    });

  }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------------------------------

  Save() {

    this.contato.nome = this.modelForm.value.nome;
    this.contato.email = this.modelForm.value.email;
    this.contato.telefone = this.modelForm.value.telefone;
    this.contato.whatsApp = this.modelForm.value.whatsApp;

    this.contato.clienteId = ((this.cliente) ? this.cliente.id : 0);

    if(this.contato.id === 0)
      this.Post();
    else
      this.Put();
      
  }

  Post() {

    const service$ = this.generics.post('Contato/Post', this.contato);

    service$.subscribe(

      (result: any) => {
        console.log('ContatoController-[Post]: ' + result);
        this.router.navigate(['/contatos']);
      },

      (error: any) => {
        console.error('ContatoController-[Post]: ' + error);
        this.router.navigate(['']);
      }

    );

  }

  Put() {

    const service$ = this.generics.put('Contato/Put', this.contato);

    service$.subscribe(

      (result: any) => {
        console.log('ContatoController-[Put]: ' + result);
        this.router.navigate(['/contatos']);
      },

      (error: any) => {
        console.error('ContatoController-[Put]: ' + error);
        this.router.navigate(['']);
      }

    );

  }

  Remover() {

    const service$ = this.generics.delete('Contato/Delete', this.contato.id);

    service$.subscribe(

      (result: any) => {
        console.log('ContatoController-[Delete]: ' + result);
        this.router.navigate(['/contatos']);
      },

      (error: any) => {
        console.error('ContatoController-[Delete]: ' + error);
        this.router.navigate(['']);
      }

    );
  }

  //-----------------------------------------------------------------------------------------------

  onSelect(event: any) {

    this.cliente = new Cliente();
    this.session.remove('cliente');

    this.clientes.find(elem => { 
      if(elem.id == event.value) {
        this.cliente = elem;
        this.session.set('cliente', this.cliente);
      }
    });

  }

}