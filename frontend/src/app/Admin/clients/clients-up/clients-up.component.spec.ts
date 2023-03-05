import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsUpComponent } from './clients-up.component';

describe('ClientsUpComponent', () => {
  let component: ClientsUpComponent;
  let fixture: ComponentFixture<ClientsUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
