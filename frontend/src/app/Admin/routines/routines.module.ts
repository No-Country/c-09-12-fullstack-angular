import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

import { RoutinesUpComponent } from './routines-up/routines-up.component';
import { RoutinesListComponent } from './routines-list/routines-list.component';
import { AdminRoutinesComponent } from './page/admin-routines.component';


@NgModule({
  declarations: [
    RoutinesUpComponent,
    RoutinesListComponent,
    AdminRoutinesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class RoutinesModule { }
