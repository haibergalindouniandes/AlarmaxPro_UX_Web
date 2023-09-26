import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule]
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  notImplemented(){
    this.toastr.warning('Not implemented', '¡¡¡ Esta funcionalidad no esta implementada para este Release  !!!');
  }

  closeSession() {
    const username = sessionStorage.getItem('username');
    if (!!username) {
      sessionStorage.setItem('username', '');
      this.toastr.success('Confirmation', 'Se cerró la sesión correctamente');
      this.router.navigate(['/'])
    } else {
      this.toastr.error('Unauthorized', '¡¡¡ Debe iniciar sesión para acceder a esta opción  !!!');
    }
  };

  navigateAccountSettings() {
    const username = sessionStorage.getItem('username');
    if (!!username) {
      this.router.navigate(['/settings/account'])
    } else {
      this.toastr.error('Unauthorized', '¡¡¡ Debe iniciar sesión para acceder a esta opción  !!!');
    }
  };

}
