import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationensComponent } from './reservationens.component';

describe('ReservationensComponent', () => {
  let component: ReservationensComponent;
  let fixture: ComponentFixture<ReservationensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
