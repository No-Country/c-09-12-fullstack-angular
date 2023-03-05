import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EXCERCISES_BY_ID_URL, EXCERCISES_URL } from '../../constants/endpoints';
import { Excercises } from '../../models/excercises/excercises';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  constructor(private http: HttpClient) { }

  // TRAE TODOS LOS EJERCICIOS
  getAllExcercises(headers:HttpHeaders):Observable<Excercises[]>{
    return this.http.get<Excercises[]>(EXCERCISES_URL, { headers }).pipe(catchError(this.handlerUserError));
  }

  // TRAE UN EJERCICIO POR ID
  getExcerciseById(id:number, headers:HttpHeaders): Observable<Excercises>{
    return this.http.get<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`, { headers }).pipe(catchError(this.handlerUserError));
  }

  // AGREGA UN TOUR
  newExcercises(tourValue:Excercises, headers:HttpHeaders): Observable<Excercises | any>{
    return this.http.post(EXCERCISES_URL, tourValue, {headers, responseType: 'text'} ).pipe(catchError(this.handlerUserError));
  }

  // EDITA UN TOUR
  updateExcercises(id:number, tourValue:Excercises, headers:HttpHeaders): Observable<any>{
    return this.http.patch<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`, tourValue, { headers }).pipe(catchError(this.handlerUserError));
  }

  //ELIMINA UN TOUR
  deleteExcercises(id:number, headers:HttpHeaders): Observable<{}>{
    return this.http.delete<Excercises>(`${EXCERCISES_BY_ID_URL}/${id}`, { headers }).pipe(catchError(this.handlerUserError));
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
