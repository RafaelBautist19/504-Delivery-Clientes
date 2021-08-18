import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient, private router: Router) { }

  nuevoPedido(pedido:any):Observable<any>{
    return this.http.post('http://localhost:8888/pedidos/nuevoPedido', pedido);
  }

  verPedidos(idCliente:any):Observable<any>{
    return this.http.get(`http://localhost:8888/pedidos/${idCliente}`,{});
  }

  verInformacionPedido(idPedido:any):Observable<any>{
    return this.http.get(`http://localhost:8888/pedidos/${idPedido}/informacion`,{});
  }

}
