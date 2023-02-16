import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SignInModule } from './sign-in/sign-in.module';
import { AboutUsModule } from './about-us/about-us.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    HttpClientModule,
    HomeModule,
    LoginModule,
    SignInModule,
    AboutUsModule,
  ]
})
export class PublicModule { }
