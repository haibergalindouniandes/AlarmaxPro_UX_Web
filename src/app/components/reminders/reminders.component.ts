import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MatCardModule } from '@angular/material/card';
import { RemindersItemComponent } from "../reminders-item/reminders-item.component";

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatCardModule, RemindersItemComponent]
})
export class RemindersComponent implements OnInit {

  faPlus = faPlus;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/reminders/create'])
  };

}
