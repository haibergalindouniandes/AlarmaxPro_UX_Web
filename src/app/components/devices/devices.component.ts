import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MatCardModule } from '@angular/material/card';
import { DevicesItemComponent } from "../devices-item/devices-item.component";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, MatCardModule, DevicesItemComponent]
})
export class DevicesComponent implements OnInit {

  faPlus = faPlus;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['/devices/create'])
  };

}
