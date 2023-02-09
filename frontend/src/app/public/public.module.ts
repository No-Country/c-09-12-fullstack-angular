import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AboutUsModule } from './about-us/about-us.module';



@NgModule({
  declarations: [


  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
    SharedModule,
    HomeModule,
    LoginModule,
    SignInModule,
    AboutUsModule,
  ]
})
export class PublicModule { }
