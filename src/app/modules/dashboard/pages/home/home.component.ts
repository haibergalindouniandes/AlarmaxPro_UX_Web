import { Component, OnInit, HostListener } from '@angular/core';
import { AlarmsComponent } from "../../../../components/alarms/alarms.component";
import { RemindersComponent } from "../../../../components/reminders/reminders.component";
import { DevicesComponent } from "../../../../components/devices/devices.component";
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [AlarmsComponent, RemindersComponent, DevicesComponent, SharedModule]
})
export class HomeComponent implements OnInit {

  constructor() { }
  public getScreenWidth: any;
  public getScreenHeight: any;


  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }
}
