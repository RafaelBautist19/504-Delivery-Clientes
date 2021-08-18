import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  imagenProducto:any;
  nombreRestaurante:any;
  cantidad:number=1;
  
  producto:any={};

  constructor(private restaurantesService:RestaurantesService, private rutaActiva: ActivatedRoute, private router: Router) { }

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
    );

    this.restaurantesService.obtenerInfoRestaurante(this.idRestaurante).subscribe(
      res=>{
        this.nombreRestaurante = res.nombreRestaurante;
      },
      error=>{
        console.log(error);
      }
    )

  }

  agregarProducto(){
    this.producto={
      nombreProducto: this.nombreProducto,
      precio: this.precio,
      nombreRestaurante: this.nombreRestaurante,
      cantidad: this.cantidad,
      imagenProducto: this.imagenProducto
    }
    localStorage.setItem('productos', JSON.stringify(this.producto));
    this.router.navigate(['/carrito']);
  }

}
