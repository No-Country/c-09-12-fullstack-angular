//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componentes
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PublicRoutingModule } from '../public/public-routing.module';
import { MenuComponent } from './components/navbar/menu/menu.component';
import { AuthorsComponent } from './components/footer/authors/authors.component';




@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    MenuComponent,
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PublicRoutingModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
