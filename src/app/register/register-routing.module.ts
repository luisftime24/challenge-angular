import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmRegisterFormComponent } from './pages/confirm-register-form/confirm-register-form.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {
    path: 'passengers',
    component: RegisterFormComponent
  },
  {
    path: 'confirm',
    component: ConfirmRegisterFormComponent
  }, {
    path: '**',
    redirectTo: 'passengers'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
