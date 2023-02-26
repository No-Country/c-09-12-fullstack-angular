import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileClientComponent } from './components/profile-client/profile-client.component';
import { PageClientComponent } from './page/page-client.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    ProfileClientComponent,
    PageClientComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserModule { }
