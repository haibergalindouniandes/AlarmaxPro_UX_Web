import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-settings-account-menu',
  templateUrl: './settings-account-menu.component.html',
  styleUrls: ['./settings-account-menu.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatCardModule]
})
export class SettingsAccountMenuComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  closeSession() {
    this.toastr.success('Confirmation', 'Se cerró la sesión correctamente');
    this.router.navigate(['/'])
  };

}
