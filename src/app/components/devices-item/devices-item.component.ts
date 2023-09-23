import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { CommonModule } from '@angular/common';
import devicesList from "../../../assets/json/devices.json";

@Component({
  selector: 'app-devices-item',
  templateUrl: './devices-item.component.html',
  styleUrls: ['./devices-item.component.scss'],
  standalone: true,
  imports: [FontAwesomeModule, CommonModule]
})
export class DevicesItemComponent implements OnInit {

  faEllipsisV = faEllipsisV;
  devices: any = devicesList;
  statusItem = "Desconectado";

  constructor() { }

  ngOnInit(): void {
  }

}
