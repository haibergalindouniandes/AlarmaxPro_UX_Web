import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ToastrService } from 'ngx-toastr';
import { SharedModule } from "../../../../shared/shared.module";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, FontAwesomeModule, MatCheckboxModule, SharedModule]
})
export class SigninComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  show: boolean = false;
  checked = false;
  username?: string;
  password?: string;
  icon = faEye;


  constructor(private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem('username', '');
    sessionStorage.setItem('useremail', '');
    sessionStorage.setItem('userid', '');
    sessionStorage.setItem('userphone', '');
  }

  getUserName(event: any) {
    this.username = event.target.value;
  }

  getUserPassword(event: any) {
    this.password = event.target.value;
  }

  navigate() {
    if (!!this.username && !!this.password) {
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('useremail', this.username + '314@uniandes.com');
      sessionStorage.setItem('userid', 'il232-' + this.username + '-89');
      sessionStorage.setItem('userphone', '+57 310-000-0000');
      this.toastr.success('Confirmation', '¡¡¡ Bienvenido [' + this.username + '] a AlarMax Pro !!!');
      this.router.navigate(['/home'])
    } else {
      this.toastr.error('Unauthorized', '¡¡¡ El usuario y la contraseña son obligatorios  !!!');
    }
  };

  validateShowPassword() {
    if (this.icon == faEye) {
      this.icon = faEyeSlash;
    } else {
      this.icon = faEye;
    }
    this.show = !this.show;
  }

}
