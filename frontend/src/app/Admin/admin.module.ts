import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ClientsModule } from './clients/clients.module';
import { CoachModule } from './coach/coach.module';
import { ExcercisesModule } from './excercises/excercises.module';
import { RoutinesModule } from './routines/routines.module';




@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ClientsModule,
    CoachModule,
    ExcercisesModule,
    RoutinesModule

  ]
})
export class AdminModule { }
