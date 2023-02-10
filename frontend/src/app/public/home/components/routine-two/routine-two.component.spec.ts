import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineTwoComponent } from './routine-two.component';

describe('RoutineTwoComponent', () => {
  let component: RoutineTwoComponent;
  let fixture: ComponentFixture<RoutineTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutineTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutineTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
