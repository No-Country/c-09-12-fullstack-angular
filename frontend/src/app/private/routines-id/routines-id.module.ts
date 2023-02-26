import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';

import { RoutinesDaysComponent } from './components/routines-days/routines-days.component';
import { RoutinesIdComponent } from './page/routines-id.component';



@NgModule({
  declarations: [
    RoutinesDaysComponent,
    RoutinesIdComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTabsModule
  ]
})
export class RoutinesIdModule { }
