import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings-account-info',
  templateUrl: './settings-account-info.component.html',
  styleUrls: ['./settings-account-info.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule]
})
export class SettingsAccountInfoComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  updateInfo() {
    this.toastr.success('Confirmation', 'Actualización de datos exitoso');
    this.router.navigate(['/home'])
  };

  cancel() {
    this.toastr.error('Cancelation', 'Actualización de datos cancelado');
    this.router.navigate(['/home'])
  };

}
