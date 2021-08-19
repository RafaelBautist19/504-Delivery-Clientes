import { Component, OnInit } from '@angular/core';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { RestaurantesService } from 'src/app/services/restaurantes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-menu-restaurante',
  templateUrl: './menu-restaurante.component.html',
  styleUrls: ['./menu-restaurante.component.css']
})
export class MenuRestauranteComponent implements OnInit {
  
  faPlusCircle = faPlusCircle;
  idRestaurante:any;

  productos:any=[];
  constructor(private restaurantesService:RestaurantesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {

    this.idRestaurante = this.rutaActiva.snapshot.params.idRestaurante;
    
    this.restaurantesService.obtenerProductosRestaurante(this.idRestaurante).subscribe(
      res=>{
        this.productos=res.menu;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
