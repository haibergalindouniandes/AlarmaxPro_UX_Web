import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersItemComponent } from './reminders-item.component';

describe('RemindersItemComponent', () => {
  let component: RemindersItemComponent;
  let fixture: ComponentFixture<RemindersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemindersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemindersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
