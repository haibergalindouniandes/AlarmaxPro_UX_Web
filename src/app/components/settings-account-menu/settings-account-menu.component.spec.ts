import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAccountMenuComponent } from './settings-account-menu.component';

describe('SettingsAccountMenuComponent', () => {
  let component: SettingsAccountMenuComponent;
  let fixture: ComponentFixture<SettingsAccountMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAccountMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsAccountMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
