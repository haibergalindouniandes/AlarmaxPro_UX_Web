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

  username =  sessionStorage.getItem("username")
  useremail =  sessionStorage.getItem("useremail")
  userid =  sessionStorage.getItem("userid")
  userphone =  sessionStorage.getItem("userphone")
  usernameUpdate = '';
  useremailUpdate = '';
  useridUpdate = '';
  userphoneUpdate = '';

  constructor(private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  notImplemented(){
    this.toastr.warning('Not implemented', '¡¡¡ Esta funcionalidad no esta implementada para este Release  !!!');
  }

  getUserName(event: any) {
    this.usernameUpdate = event.target.value;
  }

  getUserEmail(event: any) {
    this.useremailUpdate = event.target.value;
  }

  getUserId(event: any) {
    this.useridUpdate = event.target.value;
  }

  getUserPhone(event: any) {
    this.userphoneUpdate = event.target.value;
  }

  updateInfo() {
    if (!!this.usernameUpdate) {
      sessionStorage.setItem('username', this.usernameUpdate);
    }
    if (!!this.useremailUpdate) {
      sessionStorage.setItem('useremail', this.useremailUpdate);
    }
    if (!!this.useridUpdate) {
      sessionStorage.setItem('userid', this.useridUpdate);
    }
    if (!!this.userphoneUpdate) {
      sessionStorage.setItem('userphone', this.userphoneUpdate);
    }
    this.toastr.success('Confirmation', 'Actualización de datos exitoso');
    this.router.navigate(['/home'])
  };

  cancel() {
    this.toastr.error('Cancelation', 'Actualización de datos cancelado');
    this.router.navigate(['/home'])
  };

}
