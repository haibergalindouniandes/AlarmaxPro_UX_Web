import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AlarmsComponent } from "../../components/alarms/alarms.component";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule, AlarmsComponent, HomeComponent,
  ]
})
export class DashboardModule { }
