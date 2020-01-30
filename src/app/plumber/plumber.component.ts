import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plumber',
  templateUrl: './plumber.component.html',
  styleUrls: ['./plumber.component.css']
})
export class PlumberComponent implements OnInit {
  plumbers=[];
  constructor() { 
    this.plumbers=[
      {Id: 1, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 5},
      {Id: 2, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 2},
      {Id: 3, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 3},
      {Id: 4, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 3.5},
      {Id: 5, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 1.5},
      {Id: 6, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 1},
      {Id: 7, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 2.5},
      {Id: 8, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 4.5}
    ];
  }

  ngOnInit() {
  }

  searchPlumbers(){
    let result=[
      {Id: 1, Name: "Prakash Acharya", Description: "Plumbing", Image:"../../assets/images/Plumber.png", Rating: 5}
    ];

    this.plumbers=result;
  }
  
}
