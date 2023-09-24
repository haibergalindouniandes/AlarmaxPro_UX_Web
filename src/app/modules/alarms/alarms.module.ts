import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { AlarmsComponent } from "../../components/alarms/alarms.component";
import { AlarmsCreateComponent } from "../../components/alarms-create/alarms-create.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlarmsComponent,
    AlarmsCreateComponent,
    CreateComponent
  ]
})
export class AlarmsModule { }
