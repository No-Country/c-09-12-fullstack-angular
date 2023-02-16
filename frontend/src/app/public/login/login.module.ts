import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

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
    CommonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class LoginModule { }
