import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events=[];
  constructor() {
    this.events=[
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"},
      {Id: 1, EventName: "Event", EventDescription: "Description of Event", Image:"././assets/images/plumber.jpg"}
    ];
   }

  ngOnInit() {
  }

}
