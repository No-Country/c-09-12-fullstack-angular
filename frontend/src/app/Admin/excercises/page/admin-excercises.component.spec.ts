import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminExcercisesComponent } from './admin-excercises.component';

describe('AdminExcercisesComponent', () => {
  let component: AdminExcercisesComponent;
  let fixture: ComponentFixture<AdminExcercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminExcercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminExcercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
