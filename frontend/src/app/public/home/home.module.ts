import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

import { CardsComponent } from './components/cards/cards.component';
import { RoutineOneComponent } from './components/routine-one/routine-one.component';
import { RoutineTwoComponent } from './components/routine-two/routine-two.component';
import { RoutineThreeComponent } from './components/routine-three/routine-three.component';


@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    RoutineOneComponent,
    RoutineTwoComponent,
    RoutineThreeComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatTabsModule
  ]
})
export class HomeModule { }
