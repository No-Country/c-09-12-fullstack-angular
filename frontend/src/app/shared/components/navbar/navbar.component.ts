import { Component} from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Role, UserResponse } from '../../interface/userLogin';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  buttonImage: string = '../../../../assets/icons/menu.png';
  showMenu: boolean = false;

  private subscription: Subscription = new Subscription();

  private destroy$ = new Subject<any>();

  isLogged:boolean = true;

  isAdmin:Role = null!;

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.authService.user$.pipe(takeUntil(this.destroy$)).subscribe((user: UserResponse) => {
      this.isLogged = true;
      // this.isAdmin = user?.role;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next({});
    this.destroy$.complete();

  }

  toggleMenu(): void {
      this.showMenu = !this.showMenu;

    if (this.showMenu) {
      this.buttonImage = '../../../../assets/icons/cruzar.png';
    } else {
      this.buttonImage = '../../../../assets/icons/menu.png';
    }

  }

  onLogout():void{
    this.authService.logout();
  }

}
