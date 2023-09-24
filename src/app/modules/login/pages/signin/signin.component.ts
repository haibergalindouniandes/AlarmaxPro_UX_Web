import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, FontAwesomeModule, MatCheckboxModule]
})
export class SigninComponent implements OnInit {

  faEye = faEye;
  hide = true;
  checked = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/home'])
  };

}
