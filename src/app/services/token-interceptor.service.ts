import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { ClientesService } from './clientes.service';

@Injectable({
  providedIn: 'root'
})


export class TokenInterceptorService implements HttpInterceptor {

  constructor(private clientesService: ClientesService){}

  intercept(req:any, next:any){
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.clientesService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }

}
