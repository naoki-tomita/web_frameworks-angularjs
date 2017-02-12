import { Component } from "@angular/core";

@Component( {
  selector: "app",
  template: `
    <my-input></my-input>
    <my-input></my-input>
    <ul>
      <li>mon</li>
      <li>tue</li>
      <li>wed</li>
      <li>thu</li>
      <li>fri</li>
      <li>sat</li>
      <li>sun</li>
      <calendar></calendar>
    </ul>
  `
} )

export class AppComponent {}
