import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsCreateComponent } from './alarms-create.component';

describe('AlarmsCreateComponent', () => {
  let component: AlarmsCreateComponent;
  let fixture: ComponentFixture<AlarmsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
