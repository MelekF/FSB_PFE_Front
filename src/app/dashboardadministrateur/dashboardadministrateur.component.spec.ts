import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardadministrateurComponent } from './dashboardadministrateur.component';

describe('DashboardadministrateurComponent', () => {
  let component: DashboardadministrateurComponent;
  let fixture: ComponentFixture<DashboardadministrateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardadministrateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardadministrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
