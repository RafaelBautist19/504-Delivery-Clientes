import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private URLClientes = "http://localhost:8888/clientes";

  constructor(private http: HttpClient, private router: Router) { }

  login(cliente:any){
    return this.http.post<any>(this.URLClientes+'/login', cliente);
  }

  registrar(cliente:any){
    return this.http.post(`${this.URLClientes}/signup`, cliente);
  }

  informacionCliente(cliente:any){
    return this.http.get(`${this.URLClientes}/${cliente}`, {});
  }

  loggedIn():Boolean{
    if (localStorage.getItem('token')){
      return true
    }
    else{
      return false
    }
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('clientID');
    this.router.navigate(['']);
  }
}
