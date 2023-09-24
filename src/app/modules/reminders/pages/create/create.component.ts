import { Component, OnInit } from '@angular/core';
import { RemindersComponent } from "../../../../components/reminders/reminders.component";
import { RemindersCreateComponent } from "../../../../components/reminders-create/reminders-create.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [RemindersComponent, RemindersCreateComponent]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
