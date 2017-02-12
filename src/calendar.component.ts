import { Component } from "@angular/core";
import { Day } from "./day.component";
import { Calendar } from "./calendar";

@Component( {
  selector: "calendar",
  template: `
    <li *ngFor=”let date of dates”>
      <div>{{date.date}}</div>
    </li>
  `
} )

export class CalendarComponent {
  public dates = Calendar.getDates( 2017, 2 )
}
