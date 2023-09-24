import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsItemComponent } from './alarms-item.component';

describe('AlarmsItemComponent', () => {
  let component: AlarmsItemComponent;
  let fixture: ComponentFixture<AlarmsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlarmsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
