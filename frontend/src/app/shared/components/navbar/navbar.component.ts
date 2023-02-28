import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  buttonImage: string = '../../../../assets/icons/menu.png';
  showMenu: boolean = false;

  toggleMenu(): void {
      this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.buttonImage = '../../../../assets/icons/cruzar.png';
    } else {
      this.buttonImage = '../../../../assets/icons/menu.png';
    }

  }

}
