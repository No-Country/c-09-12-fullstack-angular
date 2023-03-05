import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcercisesListComponent } from './excercises-list.component';

describe('ExcercisesListComponent', () => {
  let component: ExcercisesListComponent;
  let fixture: ComponentFixture<ExcercisesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcercisesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcercisesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
