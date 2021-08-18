import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-direccion-entrega',
  templateUrl: './direccion-entrega.component.html',
  styleUrls: ['./direccion-entrega.component.css']
})



export class DireccionEntregaComponent implements OnInit {
  lat:number = 0;
  lng:number = 0;

  ubicacionEntrega:any;

  opcionSeleccionada:string = '';
  
  getClientLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude
        console.log(this.lat);
        console.log(this.lng);
      })
    }
  }

  private map!: google.maps.Map;

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCBN7dfD0vWowUlEaDGg9zY_47VRnDbJkc'
    })

    this.getClientLocation();

    loader.load().then(() => {

      var location = { lat: this.lat, lng: this.lng }

      this.ubicacionEntrega = location;

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 18
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
        draggable: true,
        title: `${location}`
      });
    })
  }

  realizarPedido(){
    if(this.opcionSeleccionada === ''){
      alert('Seleccione un metodo de Pago');
    }
    console.log(this.opcionSeleccionada, this.ubicacionEntrega);
  }

}
