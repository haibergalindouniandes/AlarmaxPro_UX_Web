import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

interface DevicesType {
  value: string;
  viewValue: string;
}

interface AppsType {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-devices-create',
  templateUrl: './devices-create.component.html',
  styleUrls: ['./devices-create.component.scss'],
  standalone: true,
  imports: [NgFor, MatCardModule, MatRadioModule, MatSelectModule, FormsModule]
})
export class DevicesCreateComponent implements OnInit {

  selectedValueDeviceType?: string;
  selectedValueAppType?: string;
  selectedValueOptiones?: string;

  devicesType: DevicesType[] = [
    { value: 'Bombilla IOT', viewValue: 'Bombilla IOT' },
    { value: 'Smarth Watch', viewValue: 'Smarth Watch' },
    { value: 'Bocina IOT', viewValue: 'Bocina IOT' },
    { value: 'TV', viewValue: 'TV' }
  ];

  appsType: AppsType[] = [
    { value: 'Google Assistant', viewValue: 'Google Assistant' },
    { value: 'Smart Watch Assistant', viewValue: 'Smart Watch Assistant' },
    { value: 'JBL Assistant', viewValue: 'JBL Assistant' },
    { value: 'Alexa Assistant', viewValue: 'Alexa Assistant' }
  ];

  constructor(private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  createDevice() {
    this.toastr.success('Confirmation', 'Dispositivo sincronizado exitosamente');
    this.router.navigate(['/home'])
  };

  cancel() {
    this.toastr.error('Cancelation', 'Sincronización de dispositivo cancelado');
    this.router.navigate(['/home'])
  };

}
