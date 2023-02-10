import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    PublicModule,
    PrivateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
