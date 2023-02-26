import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminClientsComponent } from './clients/page/admin-clients.component';
import { AdminComponent } from './admin.component';
import { AdminCoachComponent } from './coach/page/admin-coach.component';
import { AdminRoutinesComponent } from './routines/page/admin-routines.component';
import { AdminExcercisesComponent } from './excercises/page/admin-excercises.component';



const routes: Routes = [
  {
    path: '', component: AdminComponent, children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'admin', component: AdminComponent, children: [
            { path: '', component: AdminClientsComponent },
            { path: 'clients', component: AdminClientsComponent },
            { path: 'coach', component: AdminCoachComponent},
            { path: 'routine', component: AdminRoutinesComponent },
            { path: 'exercises', component: AdminExcercisesComponent },
          ]
        },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
