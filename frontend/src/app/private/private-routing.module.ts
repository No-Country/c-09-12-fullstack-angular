import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrivateComponent } from './private.component';
import { RoutinesIdComponent } from './routines-id/page/routines-id.component';
import { PageClientComponent } from './user/page/page-client.component';




const routes: Routes = [
  {
    path: '', component: PrivateComponent, children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'routine/id', component: RoutinesIdComponent },
        { path: 'profile', component: PageClientComponent },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
