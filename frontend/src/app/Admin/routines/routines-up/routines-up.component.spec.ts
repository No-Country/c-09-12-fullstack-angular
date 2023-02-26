import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesUpComponent } from './routines-up.component';

describe('RoutinesUpComponent', () => {
  let component: RoutinesUpComponent;
  let fixture: ComponentFixture<RoutinesUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinesUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
