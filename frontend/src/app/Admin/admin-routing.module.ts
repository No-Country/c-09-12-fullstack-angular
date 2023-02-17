import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminClientsComponent } from './clients/page/admin-clients.component';
import { AdminComponent } from './admin.component';



const routes: Routes = [
  {
    path: '', component: AdminComponent, children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        {
          path: 'admin', component: AdminComponent, children: [
            { path: '', component: AdminClientsComponent },
            { path: 'clients', component: AdminClientsComponent },
            // { path: 'routine',  },
            // { path: 'coach', },
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
