import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { CommonModule } from '@angular/common';
import remindersList from "../../../assets/json/reminders.json";

@Component({
  selector: 'app-reminders-item',
  templateUrl: './reminders-item.component.html',
  styleUrls: ['./reminders-item.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class RemindersItemComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  reminders: any = remindersList;

  constructor() { }

  ngOnInit(): void {
  }

}
