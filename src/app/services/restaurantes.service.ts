import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  constructor(private http:HttpClient) { }

  obtenerRestaurantes():Observable<any>{
    return this.http.get('http://localhost:8888/restaurantes',{});
  }

  obtenerProductosRestaurante(restaurante:any):Observable<any>{
    return this.http.get(`http://localhost:8888/restaurantes/${restaurante}/menu`,{});
  }

  obtenerInfoProducto(restaurante:any, producto:any):Observable<any>{
    return this.http.get(`http://localhost:8888/restaurantes/${restaurante}/menu/${producto}`,{});
  }

}
