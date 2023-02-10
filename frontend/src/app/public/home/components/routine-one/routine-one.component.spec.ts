import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineOneComponent } from './routine-one.component';

describe('RoutineOneComponent', () => {
  let component: RoutineOneComponent;
  let fixture: ComponentFixture<RoutineOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
