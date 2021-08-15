import { Component, OnInit } from '@angular/core';
import {faHome, faShoppingCart, faShoppingBag, faUser} from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

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

  restaurantes:any=[];

  constructor(private title:Title, private restaurantesService:RestaurantesService) { }

  ngOnInit(): void {
    this.title.setTitle('504 Delivery - Pagina Principal');

    this.restaurantesService.obtenerRestaurantes().subscribe(
      res=>{
        this.restaurantes = res;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
