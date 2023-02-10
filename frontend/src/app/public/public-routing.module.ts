import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/page/about-us.component';
import { HomeComponent } from './home/page/home.component';
import { FormIdentifyUserComponent } from './login/components/form-identify-user/form-identify-user.component';
import { FormLoginComponent } from './login/components/form-login/form-login.component';
import { LoginComponent } from './login/page/login.component';
import { PublicComponent } from './public.component';
import { SignInComponent } from './sign-in/page/sign-in.component';
import { CardsComponent } from './home/components/cards/cards.component';
import { RoutineOneComponent } from './home/components/routine-one/routine-one.component';
import { RoutineTwoComponent } from './home/components/routine-two/routine-two.component';
import { RoutineThreeComponent } from './home/components/routine-three/routine-three.component';

const routes: Routes = [
  {
    path: '', component: PublicComponent, children:
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent, children: [
          { path: '', component: CardsComponent  },
          { path: 'routine-one', component: RoutineOneComponent  },
          { path: 'routine-two', component: RoutineTwoComponent  },
          { path: 'routine-three', component: RoutineThreeComponent  },
        ] },
        { path: 'login', component: LoginComponent, children: [
            { path: '', component: FormLoginComponent,  },
            { path: 'identify', component: FormIdentifyUserComponent, },
          ]
        },
        { path: 'about-us', component: AboutUsComponent },
        { path: 'sign-in', component: SignInComponent,  },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PublicRoutingModule  { }
