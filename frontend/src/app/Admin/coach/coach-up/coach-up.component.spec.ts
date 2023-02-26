import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachUpComponent } from './coach-up.component';

describe('CoachUpComponent', () => {
  let component: CoachUpComponent;
  let fixture: ComponentFixture<CoachUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoachUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
