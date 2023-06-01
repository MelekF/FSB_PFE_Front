import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalleensComponent } from './salleens.component';

describe('SalleensComponent', () => {
  let component: SalleensComponent;
  let fixture: ComponentFixture<SalleensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalleensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalleensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
