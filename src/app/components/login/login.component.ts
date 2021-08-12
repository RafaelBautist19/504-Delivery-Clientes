import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  correo:any=null;
  password:any=null;


  cliente={correo:this.correo,password:this.password};

  constructor(private title:Title, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Login');
  }

  iniciarSesion(){

   this.authService.login(this.cliente).subscribe(
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
