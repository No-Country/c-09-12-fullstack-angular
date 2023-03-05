import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { ExcercisesListComponent } from './excercises-list/excercises-list.component';
import { ExcercisesUpComponent } from './excercises-up/excercises-up.component';
import { AdminExcercisesComponent } from './page/admin-excercises.component';



@NgModule({
  declarations: [
    ExcercisesListComponent,
    ExcercisesUpComponent,
    AdminExcercisesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule
  ]
})
export class ExcercisesModule { }
