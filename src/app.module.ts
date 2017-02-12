import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { CalendarComponent } from "./calendar.component";
import { Input } from "./input.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [ AppComponent, CalendarComponent, Input ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
