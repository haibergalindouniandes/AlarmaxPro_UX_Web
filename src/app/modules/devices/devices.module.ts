import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { DevicesComponent } from "../../components/devices/devices.component";
import { DevicesCreateComponent } from "../../components/devices-create/devices-create.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateComponent,
    DevicesComponent,
    DevicesCreateComponent
  ]
})
export class DevicesModule { }
