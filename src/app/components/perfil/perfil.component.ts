import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente:any=localStorage.getItem('clientID');
  clienteActual:any;

  constructor(public clientesService:ClientesService) { }

  ngOnInit(): void {
    this.clientesService.informacionCliente(this.cliente).subscribe(
      res=>{
        this.clienteActual=res;
      },
      error=>{
        console.log(error)
      }
    )
  }



}
