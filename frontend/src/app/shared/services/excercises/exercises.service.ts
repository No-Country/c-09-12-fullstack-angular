import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EXCERCISES_BY_ID_URL, EXCERCISES_URL } from '../../constants/endpoints';
import { Excercises } from '../../models/excercises/excercises';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

  // TRAE TODOS LOS TOURS
  getAllTours():Observable<Excercises[]>{
    return this.http.get<Excercises[]>(EXCERCISES_URL).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN TOUR POR ID
  getToursById(id:number): Observable<Excercises>{
    return this.http.get<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN TOUR
  newTour(tourValue:Excercises): Observable<Excercises | any>{
    return this.http.post(EXCERCISES_URL, tourValue, {responseType: 'text'} ).pipe(catchError(this.handlerUserError));
  }

  // EDITA UN TOUR
  updateTour(id:number, tourValue:Excercises): Observable<any>{
    return this.http.patch<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`, tourValue).pipe(catchError(this.handlerUserError));
  }

  //ELIMINA UN TOUR
  deleteTour(id:number): Observable<{}>{
    return this.http.delete<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`).pipe(catchError(this.handlerUserError));
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
