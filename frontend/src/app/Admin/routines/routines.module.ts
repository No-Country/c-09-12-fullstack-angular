import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutinesUpComponent } from './routines-up/routines-up.component';
import { RoutinesListComponent } from './routines-list/routines-list.component';
import { AdminRoutinesComponent } from './page/admin-routines.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    RoutinesUpComponent,
    RoutinesListComponent,
    AdminRoutinesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RoutinesModule { }
