import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcercisesListComponent } from './excercises-list/excercises-list.component';
import { ExcercisesUpComponent } from './excercises-up/excercises-up.component';
import { AdminExcercisesComponent } from './page/admin-excercises.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ExcercisesListComponent,
    ExcercisesUpComponent,
    AdminExcercisesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExcercisesModule { }
