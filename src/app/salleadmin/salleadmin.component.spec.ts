import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleadminComponent } from './salleadmin.component';

describe('SalleadminComponent', () => {
  let component: SalleadminComponent;
  let fixture: ComponentFixture<SalleadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
