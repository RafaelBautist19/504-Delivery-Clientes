import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  correo:any=null;
  password:any=null;


  cliente={correo:this.correo,password:this.password};

  constructor(private title:Title, private clientesService: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Login');
  }

  iniciarSesion(){

   this.clientesService.login(this.cliente).subscribe(
     res=>{
       localStorage.setItem('token', res.token);
       localStorage.setItem('clientID', res.clientID);
       this.router.navigate(['/home']);
     },
     error=>{
       console.log(error);
     })
  }

}
