import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { USER_LOGIN_URL } from '../../constants/endpoints';
import { UserLogin, UserResponse } from '../../interface/userLogin';


const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<UserResponse>(null!);

  constructor(
    private http: HttpClient,
    private router:Router,
    private toastrService:ToastrService
  ) {
    this.checkToken();
  }

  get user$():Observable<UserResponse> {
    return this.user.asObservable();
  }

  get userValue():UserResponse {
    return this.user.getValue();
  }

  login(authData:UserLogin): Observable<UserResponse | void>{
    return this.http.post<UserResponse>(USER_LOGIN_URL, authData).pipe(
      map((user:UserResponse) => {
        this.toastrService.success('Bienvenido a Delorean Zeta Usuario Promedio', 'Login Exitoso');
        this.saveLocalStorage(user);
        this.user.next(user);
        return user;
      }),
      catchError( (error) => this.handlerError(error) )
    );

  }

  logout(): void{
    localStorage.removeItem('user');
    this.user.next(null!);
    this.router.navigate(['/login']);
  }

  private checkToken():void{
    const user = JSON.parse(localStorage.getItem('user')!) || null;

    if (user){
      const isExpired = helper.isTokenExpired(user.token);

      if (isExpired){
        this.logout();
      } else {
        this.user.next(user);
      }
    }
  }

  private saveLocalStorage(user:UserResponse):void{
    const { userId, ...rest } = user;
    localStorage.setItem('user', JSON.stringify(rest));
  }

  private handlerError(error:any): Observable<never>{
    let errorMessage = 'Un error';
    if(error){
      errorMessage= `Error: code ${error.message}`
      this.toastrService.error('Email y/o contraseña invalido', 'Login Failed');
    }
    return throwError(() => errorMessage);
  }
}
