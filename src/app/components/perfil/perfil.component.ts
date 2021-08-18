import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  cliente:any=localStorage.getItem('clientID');
  clienteActual:any;
  pedidosCliente:any=[];
  idPedido:any;
  pedido:any;
  

  constructor(public clientesService:ClientesService, private pedidosService:PedidosService, private rutaActiva:ActivatedRoute) { }


  ngOnInit(): void {

    this.idPedido = this.rutaActiva.snapshot.params.idPedido;

    this.clientesService.informacionCliente(this.cliente).subscribe(
      res=>{
        this.clienteActual=res;
      },
      error=>{
        console.log(error)
      }
    );

    this.pedidosService.verPedidos(this.cliente).subscribe(
      res=>{
        this.pedidosCliente=res;
      },
      error=>{
        console.log(error);
      }
    )
  }



}
