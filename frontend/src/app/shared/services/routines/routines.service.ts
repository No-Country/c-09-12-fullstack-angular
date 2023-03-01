import { HttpClient } from '@angular/common/http';
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
  getAllTours():Observable<Routines[]>{
    return this.http.get<Routines[]>(ROUTINES_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UNA RUTINA POR ID
  getToursById(id:number): Observable<Routines>{
    return this.http.get<Routines>(`${ROUTINES_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UNA RUTINA
  newTour(routineValue:Routines): Observable<Routines | any>{
    return this.http.post(ROUTINES_URL, routineValue, {responseType: 'text'} ).pipe(catchError(this.handlerUserError));
  }

  // EDITA UNA RUTINA
  updateTour(id:number, routineValue:Routines): Observable<any>{
    return this.http.patch<Routines>(`${ROUTINES_BY_ID_URL}/${id}`, routineValue).pipe(catchError(this.handlerUserError));
  }

  //ELIMINA UNA RUTINA
  deleteTour(id:number): Observable<{}>{
    return this.http.delete<Routines>(`${ROUTINES_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
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
