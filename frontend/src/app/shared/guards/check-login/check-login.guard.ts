import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { UserResponse } from '../../interface/userLogin';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  
  constructor(private authService:AuthService){}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe( take(1), map(
      (user:UserResponse) => (!user ? true : false)
    ));
  }

}
