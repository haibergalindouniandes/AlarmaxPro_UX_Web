import { Component, OnInit } from '@angular/core';
import { AlarmsComponent } from "../../../../components/alarms/alarms.component";
import { RemindersComponent } from "../../../../components/reminders/reminders.component";
import { DevicesComponent } from "../../../../components/devices/devices.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [AlarmsComponent, RemindersComponent, DevicesComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
