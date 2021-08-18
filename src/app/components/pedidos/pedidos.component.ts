import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  clienteActual:any=localStorage.getItem('clientID');
  pedidos:any=[];

  constructor(private pedidosService:PedidosService) { }

  ngOnInit(): void {
    this.pedidosService.verPedidos(this.clienteActual).subscribe(
      res=>{
        this.pedidos=res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
