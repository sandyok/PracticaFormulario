import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit 
{

  genero = ['Masculino', 'Femenino'];
  model = new Usuario(1, 'Gabriela', 'Hernández Cuacua', this.genero[0], 5000);

  submitted = false;

  onSubmit() { this.submitted=true; }

  newusuario()
  {
    this.model = new Usuario(2,'','','',null);
  }

  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}
