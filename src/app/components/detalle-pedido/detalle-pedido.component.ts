import { Component, OnInit } from '@angular/core';
import { PedidosService } from 'src/app/services/pedidos.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  idPedido:any;

  informacionPedido:any;

  constructor(private pedidosService:PedidosService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPedido = this.rutaActiva.snapshot.params.idPedido

    this.pedidosService.verInformacionPedido(this.idPedido).subscribe(
      res=>{
        this.informacionPedido = res;
      },
      error=>{
        console.log(error);
      }
    )

  }

}
