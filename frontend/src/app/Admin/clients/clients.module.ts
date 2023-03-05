import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { ClientsUpComponent } from './clients-up/clients-up.component';
import { AdminClientsComponent } from './page/admin-clients.component';
import { SharedModule } from '../../shared/shared.module';
import { ClientsListComponent } from './clients-list/clients-list.component';



@NgModule({
  declarations: [
    ClientsListComponent,
    ClientsUpComponent,
    AdminClientsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    SharedModule
  ]
})
export class ClientsModule { }
