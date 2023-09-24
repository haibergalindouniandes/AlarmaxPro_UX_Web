import { Component, OnInit } from '@angular/core';
import { DevicesComponent } from "../../../../components/devices/devices.component";
import { DevicesCreateComponent } from "../../../../components/devices-create/devices-create.component";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [DevicesComponent, DevicesCreateComponent]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
