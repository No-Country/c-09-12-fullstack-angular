import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIdentifyUserComponent } from './form-identify-user.component';

describe('FormIdentifyUserComponent', () => {
  let component: FormIdentifyUserComponent;
  let fixture: ComponentFixture<FormIdentifyUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormIdentifyUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormIdentifyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
