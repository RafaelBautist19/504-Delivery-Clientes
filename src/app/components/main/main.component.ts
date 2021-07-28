import { Component, OnInit } from '@angular/core';
import {faHome, faShoppingCart, faShoppingBag, faUser} from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  faHome = faHome;
  faShoppingCart = faShoppingCart;
  faShoppingBag = faShoppingBag;
  faUser = faUser

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Pagina Principal');
  }

}
