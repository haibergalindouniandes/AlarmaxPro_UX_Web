import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { CommonModule } from '@angular/common';
import alarmsList from "../../../assets/json/alarms.json";

@Component({
  selector: 'app-alarms-item',
  templateUrl: './alarms-item.component.html',
  styleUrls: ['./alarms-item.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class AlarmsItemComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  alarms: any = alarmsList;

  constructor() { }

  ngOnInit(): void {
  }

}
