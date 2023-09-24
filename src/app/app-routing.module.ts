import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from "./components/init/init.component";
import { HomeComponent } from "./modules/dashboard/pages/home/home.component";
import { CreateComponent } from "./modules/alarms/pages/create/create.component";
import { CreateComponent as CreateComponentReminders} from "./modules/reminders/pages/create/create.component";
import { CreateComponent as  CreateComponentDevices} from "./modules/devices/pages/create/create.component";

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'alarms/create',
    component: CreateComponent,
    pathMatch: 'full'
  },
  {
    path: 'reminders/create',
    component: CreateComponentReminders,
    pathMatch: 'full'
  },
  {
    path: 'devices/create',
    component: CreateComponentDevices,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
