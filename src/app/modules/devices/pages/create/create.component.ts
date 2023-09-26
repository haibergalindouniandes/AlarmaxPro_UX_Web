import { Component, OnInit } from '@angular/core';
import { DevicesComponent } from "../../../../components/devices/devices.component";
import { DevicesCreateComponent } from "../../../../components/devices-create/devices-create.component";
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  standalone: true,
  imports: [DevicesComponent, DevicesCreateComponent, SharedModule]
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
