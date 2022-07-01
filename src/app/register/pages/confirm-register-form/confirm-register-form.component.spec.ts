import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmRegisterFormComponent } from './confirm-register-form.component';

describe('ConfirmRegisterFormComponent', () => {
  let component: ConfirmRegisterFormComponent;
  let fixture: ComponentFixture<ConfirmRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmRegisterFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
