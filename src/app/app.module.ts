import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { LoginModule } from "./modules/login/login.module";
import { AlarmsComponent } from './components/alarms/alarms.component';
import { AlarmsItemComponent } from './components/alarms-item/alarms-item.component';
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";
import { MatCardModule } from "@angular/material/card";
import { RemindersComponent } from './components/reminders/reminders.component';
import { RemindersItemComponent } from './components/reminders-item/reminders-item.component';
import { DevicesComponent } from './components/devices/devices.component';
import { DevicesItemComponent } from './components/devices-item/devices-item.component';
import { AlarmsCreateComponent } from './components/alarms-create/alarms-create.component';
import { CreateComponent } from "./modules/alarms/pages/create/create.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatCardModule,
    LoginModule,
    AlarmsItemComponent,
    AlarmsComponent,
    HomeComponent,
    RemindersComponent,
    RemindersItemComponent,
    DevicesComponent,
    DevicesItemComponent,
    AlarmsCreateComponent,
    CreateComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
