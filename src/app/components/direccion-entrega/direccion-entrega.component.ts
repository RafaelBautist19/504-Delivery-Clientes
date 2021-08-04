import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-direccion-entrega',
  templateUrl: './direccion-entrega.component.html',
  styleUrls: ['./direccion-entrega.component.css']
})



export class DireccionEntregaComponent implements OnInit {


  title = 'google-maps';

  private map!: google.maps.Map;

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyCBN7dfD0vWowUlEaDGg9zY_47VRnDbJkc'
    })

    this.getClientLocation();

    loader.load().then(() => {

      const location = { lat: parseFloat(this.lat), lng: 	parseFloat(this.lng) }

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 18
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

  lat:any;
  lng:any;

  getClientLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude
      })
    }
  }

}
