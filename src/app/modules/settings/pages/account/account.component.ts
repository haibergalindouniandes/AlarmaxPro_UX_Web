import { Component, OnInit } from '@angular/core';
import { SettingsAccountMenuComponent } from "../../../../components/settings-account-menu/settings-account-menu.component";
import { SettingsAccountInfoComponent } from "../../../../components/settings-account-info/settings-account-info.component";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  standalone: true,
  imports: [SettingsAccountMenuComponent, SettingsAccountInfoComponent]
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
