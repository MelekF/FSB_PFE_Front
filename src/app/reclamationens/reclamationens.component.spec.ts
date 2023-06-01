import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationensComponent } from './reclamationens.component';

describe('ReclamationensComponent', () => {
  let component: ReclamationensComponent;
  let fixture: ComponentFixture<ReclamationensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamationensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
