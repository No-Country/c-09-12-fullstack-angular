import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Excercises } from 'src/app/shared/models/excercises/excercises';
import { ExercisesService } from 'src/app/shared/services/excercises/exercises.service';
import { ExcercisesUpComponent } from '../excercises-up/excercises-up.component';

@Component({
  selector: 'app-excercises-list',
  templateUrl: './excercises-list.component.html',
  styleUrls: ['./excercises-list.component.scss']
})
export class ExcercisesListComponent {

  excercises:Excercises[] = [];

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });


  constructor(
    private excercisesService:ExercisesService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    this.getAllExcercises();
  }


  getAllExcercises(){
    this.excercisesService.getAllExcercises(this.headers).subscribe(data => {
      this.excercises = data;
    }, error => {
      console.log(error)
    })
  }

  openModal(exercises={}):void {
    this.dialog.open(ExcercisesUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Ejercicio', exercises}

    });
  }

}
