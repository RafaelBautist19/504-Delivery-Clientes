import { Component, OnInit } from '@angular/core';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  faArrowLeft=faArrowLeft;

  constructor(private location:Location) { }

  goBack(){
    this.location.back();
  }

  ngOnInit(): void {
  }

}
