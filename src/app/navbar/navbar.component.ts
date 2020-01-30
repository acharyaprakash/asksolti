import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu;
  constructor() { 
    this.menu=[
      {title: "Home", link: "home"}, 
      {title: "Doctor", link: "doctor"}, 
      {title: "Plumber", link: "plumber"},
      {title: "Events", link: "event"}
    ];
  }

  ngOnInit() {
  }

}
