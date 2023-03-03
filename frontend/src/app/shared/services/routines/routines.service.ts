import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ROUTINES_BY_ID_URL, ROUTINES_URL } from '../../constants/endpoints';
import { Routines } from '../../models/rutines/rutines';

@Injectable({
  providedIn: 'root'
})
export class RoutinesService {

  constructor(private http: HttpClient) { }

  // TRAE TODAS LAS RUTINAS
  getAllRoutines(headers:HttpHeaders):Observable<Routines[]>{
    return this.http.get<Routines[]>(ROUTINES_URL, { headers }).pipe(catchError(this.handlerUserError));
  }

  // TRAE UNA RUTINA POR ID
  getRoutinesById(id:number, headers:HttpHeaders): Observable<Routines>{
    return this.http.get<Routines>(`${ROUTINES_BY_ID_URL}/${id}`, { headers }).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UNA RUTINA
  newRoutine(routineValue:Routines, headers:HttpHeaders): Observable<Routines | any>{
    return this.http.post(ROUTINES_URL, routineValue, {headers, responseType: 'text'} ).pipe(catchError(this.handlerUserError));
  }

  // EDITA UNA RUTINA
  updateRoutine(id:number, routineValue:Routines, headers:HttpHeaders): Observable<any>{
    return this.http.patch<Routines>(`${ROUTINES_BY_ID_URL}/${id}`, routineValue, { headers }).pipe(catchError(this.handlerUserError));
  }

  //ELIMINA UNA RUTINA
  deleteRoutine(id:number, headers:HttpHeaders): Observable<{}>{
    return this.http.delete<Routines>(`${ROUTINES_BY_ID_URL}/${id}`, { headers }).pipe(catchError(this.handlerUserError));
  }


  handlerUserError(error: any): Observable<never> {
    let errorMessage = 'Error';
    if (error) {
      errorMessage = `Error ${error.message}`;
      console.log(errorMessage)
    }
    return throwError(() => (errorMessage));

  }
}
