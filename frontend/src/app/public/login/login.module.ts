import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login.component';
import { FormIdentifyUserComponent } from './components/form-identify-user/form-identify-user.component';
import { FormLoginComponent } from './components/form-login/form-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    FormIdentifyUserComponent,
    FormLoginComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
