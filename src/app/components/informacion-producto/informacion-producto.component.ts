import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RestaurantesService } from 'src/app/services/restaurantes.service';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.css']
})
export class InformacionProductoComponent implements OnInit {

  idProducto:any;
  precio:any;
  idRestaurante:any;
  nombreProducto:any; 
  descripcion:any;
  productoElegido:any;
  imagenProducto:any;
  
  agregarProductoCarrito = new FormGroup({

  });

  constructor(private restaurantesService:RestaurantesService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.idProducto = this.rutaActiva.snapshot.params.idProducto;
    this.idRestaurante = this.rutaActiva.snapshot.params.idRestaurante;
    
    this.restaurantesService.obtenerInfoProducto(this.idRestaurante, this.idProducto).subscribe(
      res=>{
        this.precio = res.impuesto + res.menu[0].precio;
        this.nombreProducto = res.menu[0].nombreProducto;
        this.descripcion = res.menu[0].descripcion;
        this.imagenProducto = res.menu[0].imagenProducto;
      },
      error=>{
        console.log(error);
      }
    )
  }

}
