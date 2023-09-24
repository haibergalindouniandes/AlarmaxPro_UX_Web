import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MatCardModule } from '@angular/material/card';
import { AlarmsItemComponent } from "../alarms-item/alarms-item.component";

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatCardModule, AlarmsItemComponent]
})
export class AlarmsComponent implements OnInit {

  faPlus = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

}
