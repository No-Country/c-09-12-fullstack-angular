import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  currentUserRole: string = 'coach';

  menuOptions: { id: string; routerLink: string; name: string }[] = [];

  ngOnInit() {
    if (this.currentUserRole === 'admin') {
      this.menuOptions = [
        {
          id: uuidv4(),
          routerLink: '/profile',
          name: 'Perfil',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/clients',
          name: 'Clientes',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/coach',
          name: 'Entrenadores',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/routine',
          name: 'Rutinas',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/exercises',
          name: 'Ejercicios',
        },
      ];
    } else if (this.currentUserRole === 'coach') {
      this.menuOptions = [
        {
          id: uuidv4(),
          routerLink: '/profile',
          name: 'Perfil',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/clients',
          name: 'Clientes',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/routine',
          name: 'Rutinas',
        },
      ];
    } else if (this.currentUserRole === 'client') {
      this.menuOptions = [
        {
          id: uuidv4(),
          routerLink: '/profile',
          name: 'Perfil',
        },
        {
          id: uuidv4(),
          routerLink: '/admin/routine',
          name: 'Rutinas',
        },
      ];
    }
  }

  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }
}
