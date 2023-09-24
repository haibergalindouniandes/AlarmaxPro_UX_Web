import { Component, OnInit } from '@angular/core';
import { AlarmsComponent } from "../../../../components/alarms/alarms.component";
import { AlarmsCreateComponent } from "../../../../components/alarms-create/alarms-create.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [AlarmsComponent, AlarmsCreateComponent]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
