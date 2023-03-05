import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CoachListComponent } from './coach-list/coach-list.component';
import { CoachUpComponent } from './coach-up/coach-up.component';
import { AdminCoachComponent } from './page/admin-coach.component';




@NgModule({
  declarations: [
    CoachListComponent,
    CoachUpComponent,
    AdminCoachComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoachModule { }
