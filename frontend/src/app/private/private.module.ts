import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateRoutingModule } from './private-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutinesIdModule } from './routines-id/routines-id.module';
import { UserModule } from './user/user.module';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HttpClientModule,
    RoutinesIdModule,
    UserModule
  ]
})
export class PrivateModule { }
