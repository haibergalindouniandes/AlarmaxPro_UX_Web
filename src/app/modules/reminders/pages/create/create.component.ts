import { Component, OnInit } from '@angular/core';
import { RemindersComponent } from "../../../../components/reminders/reminders.component";
import { RemindersCreateComponent } from "../../../../components/reminders-create/reminders-create.component";
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [RemindersComponent, RemindersCreateComponent, SharedModule]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
