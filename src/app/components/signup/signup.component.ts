import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    genero: new FormControl('', [Validators.required]),
    fechaNacimiento: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
  });

  constructor(private title:Title, private router:Router, private clientesService:ClientesService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Registro');
  }

  guardarNuevoCliente(){
    this.formularioRegistro.patchValue({
      fechaNacimiento: new DatePipe('en-US').transform(this.formularioRegistro.get('fechaNacimiento')?.value, 'dd/MM/yyyy')
    })
    if(this.formularioRegistro.valid){
      this.clientesService.registrar(this.formularioRegistro.value).subscribe(
        res=>{
          this.router.navigate(['/login'])
        },
        error=>{
          console.log(error);
        }
      )
    }
    else{
      alert('Todos los campos son obligatorios (o información no rellenada con formato mostrado)');
    }
  }

}
