import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private title:Title, private router:Router) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Login');
  }

  iniciarSesion(){
      setTimeout(()=>this.router.navigate(['home']),4000);
  }

}
