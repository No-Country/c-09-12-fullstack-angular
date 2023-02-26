import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutinesIdComponent } from './routines-id.component';

describe('RoutinesIdComponent', () => {
  let component: RoutinesIdComponent;
  let fixture: ComponentFixture<RoutinesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutinesIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutinesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
