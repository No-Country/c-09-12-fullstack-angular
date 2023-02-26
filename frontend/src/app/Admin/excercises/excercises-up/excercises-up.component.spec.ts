import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercisesUpComponent } from './excercises-up.component';

describe('ExcercisesUpComponent', () => {
  let component: ExcercisesUpComponent;
  let fixture: ComponentFixture<ExcercisesUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcercisesUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcercisesUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
