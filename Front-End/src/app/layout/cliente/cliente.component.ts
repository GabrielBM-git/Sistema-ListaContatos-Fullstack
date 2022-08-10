import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from '../../../services/localStorage/localStorage.service';
import { GenericService } from '../../../services/generic/generic.service';

import { Cliente } from 'src/models/Cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {

  public cliente: Cliente;

  public modelForm: FormGroup;

  //-----------------------------------------------------------------------------------------------

  constructor(private fb: FormBuilder, private router: Router, private generics: GenericService, private session: LocalStorageService) {

    this.cliente = this.session.get('cliente');

    if(this.cliente === null)
      this.cliente = new Cliente();

    //---------------------------------------------------------------------------------------------

    this.modelForm = this.fb.group({
      nome: [ this.cliente?.nome, Validators.required ],
      grupo: [ this.cliente?.grupo, Validators.required ]
    });

  }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------------------------------

  Save() {

    this.cliente.nome = this.modelForm.value.nome;
    this.cliente.grupo = this.modelForm.value.grupo;

    if(this.cliente?.id === 0)
      this.Post();
    else
      this.Put();
  }

  Post() {

    const service$ = this.generics.post('Cliente/Post', this.cliente);

    service$.subscribe(

      (result: any) => {
        console.log('ClienteController-[Post]: ' + result);
        this.router.navigate(['/clientes']);
      },

      (error: any) => {
        console.error('ClienteController-[Post]: ' + error);
        this.router.navigate(['']);
      }

    );

  }

  Put() {

    const service$ = this.generics.put('Cliente/Put', this.cliente);

    service$.subscribe(

      (result: any) => {
        console.log('ClienteController-[Put]: ' + result);
        this.router.navigate(['/clientes']);
      },

      (error: any) => {
        console.error('ClienteController-[Put]: ' + error);
        this.router.navigate(['']);
      }

    );

  }

  Remover() {

    const service$ = this.generics.delete('Cliente/Delete', this.cliente.id);

    service$.subscribe(

      (result: any) => {
        console.log('ClienteController-[Delete]: ' + result);
        this.router.navigate(['/clientes']);
      },

      (error: any) => {
        console.error('ClienteController-[Delete]: ' + error);
        this.router.navigate(['']);
      }

    );
  }

}
