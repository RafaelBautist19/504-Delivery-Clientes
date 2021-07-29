import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correoElectronico: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    genero: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });

  constructor(private title:Title, private router:Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Registro');
  }

  guardarNuevoCliente(){
    if(this.formularioRegistro.valid){
      console.log(this.formularioRegistro.value)
      setTimeout(()=>this.router.navigate(['login']),4000);
    }
    else{
      console.log('Todos los campos son obligatorios');
    }
  }

}
