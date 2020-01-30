import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  
  serviceType:string;
  services = [
    {Id: 1, ServiceType:"Doctor", Name: "Dr. Prakash Acharya", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 5}
  ];

  requests=[
    {Id: 1, RequestedBy: "John Doe", Date: "2020-1-1", Time: "8 AM"},
    {Id: 2, RequestedBy: "John Doe", Date: "2020-1-12", Time: "11 AM"},
    {Id: 3, RequestedBy: "John Doe", Date: "2020-1-15", Time: "4 PM"},
    {Id: 4, RequestedBy: "John Doe", Date: "2020-1-12", Time: "6 AM"},
    {Id: 5, RequestedBy: "John Doe", Date: "2020-1-14", Time: "8 AM"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
