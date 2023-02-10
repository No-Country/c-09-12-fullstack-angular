import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineThreeComponent } from './routine-three.component';

describe('RoutineThreeComponent', () => {
  let component: RoutineThreeComponent;
  let fixture: ComponentFixture<RoutineThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
