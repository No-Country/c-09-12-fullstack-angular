import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesDaysComponent } from './routines-days.component';

describe('RoutinesDaysComponent', () => {
  let component: RoutinesDaysComponent;
  let fixture: ComponentFixture<RoutinesDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesDaysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinesDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
