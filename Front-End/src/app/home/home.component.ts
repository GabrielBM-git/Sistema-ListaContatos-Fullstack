import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LocalStorageService } from '../../services/localStorage/localStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public modelForm: FormGroup;

  //-----------------------------------------------------------------------------------------------

  constructor(private fb: FormBuilder, private router: Router, private session: LocalStorageService) {
    
    this.modelForm = this.fb.group({
      nome: [ '', Validators.required ]
    });

  }

  ngOnInit() {
  }

  //-----------------------------------------------------------------------------------------------

  onSearch() {

    this.session.set('search', this.modelForm.value.nome);

    this.router.navigate(['/contatos']);

    let reload = setInterval(() => { this.router.navigate(['/clientes']); clearInterval(reload); }, 100);

  }

}