import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { ConfirmRegisterFormComponent } from './pages/confirm-register-form/confirm-register-form.component';


@NgModule({
  declarations: [
    RegisterFormComponent,
    ConfirmRegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
