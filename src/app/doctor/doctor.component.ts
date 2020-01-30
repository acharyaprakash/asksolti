import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {


  doctors = [];
  searchText:string = '';

  @Input()serviceType:string;

  constructor() { 
    this.doctors=[
      {Id: 1, Name: "Dr. Prakash Acharya", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 5},
      {Id: 2, Name: "Dr. Suchita Bhattarai", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 2},
      {Id: 3, Name: "Dr. Rakesh Kandel", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 3},
      {Id: 4, Name: "Dr. Sabita Sharma", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 3.5},
      {Id: 5, Name: "Dr. Binayak Bhattarai", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 1.5},
      {Id: 6, Name: "Dr. Jhalak Sharma Acharya", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 1},
      {Id: 7, Name: "Dr. Manju Sharma", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 2.5},
      {Id: 8, Name: "Dr. Suresh Gauri Bhattarai", Description: "Cardiologist", Image:"../../assets/images/doctor.png", Rating: 4.5}
    ];
  }

  ngOnInit() {
  }

  searchDoctors(){
    let result=[];

    result = this.doctors.filter(doctor => doctor.Name.includes(this.searchText));

    this.doctors = result;
  }
}
