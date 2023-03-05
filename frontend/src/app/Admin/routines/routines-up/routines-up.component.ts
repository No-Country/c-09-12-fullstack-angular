import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Excercises } from 'src/app/shared/models/excercises/excercises';
import { RoutinesService } from 'src/app/shared/services/routines/routines.service';
import { ExercisesService } from '../../../shared/services/excercises/exercises.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-routines-up',
  templateUrl: './routines-up.component.html',
  styleUrls: ['./routines-up.component.scss']
})
export class RoutinesUpComponent {

  routinesForm:FormGroup;

  excercises!:Excercises[];

  actionToDo = Action.NEW;

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private formBuilder:FormBuilder,
    private routineService:RoutinesService,
    private excercisesService:ExercisesService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.routinesForm = this.formBuilder.group({
      name: ['', ],
      dataRutine: ['', ],
      description: ['', ],
    });

    this.excercisesService.getAllExcercises(this.headers).subscribe(serverExcercises => {
      this.excercises = serverExcercises;
    });

  }

  ngOnInit(): void {
    if(this.data?.routines.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Ejercicio';
      this.pathFormData();
    }
  }

  onKeypressEvent($event:any){
    $event.preventDefault();
  }

  saveRoutines(){
    if(this.actionToDo == Action.NEW){
      let valueRoutines = this.routinesForm.value;
      this.routineService.newRoutine(valueRoutines, this.headers).subscribe((res) => {
        this.toastr.success('Nueva rutina agregado', 'Rutina Agregada');
        this.routinesForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Routines Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      let valueRoutines = this.routinesForm.value;
      const routineId = this.data?.routines?.id;
      this.routineService.updateRoutine(routineId, valueRoutines, this.headers).subscribe((res) => {
        this.toastr.success('La rutina fue editada con exito', 'Rutina Editado');
      }, error => {
        console.log(error);
      });
    }

  }

  private pathFormData():void {
    this.routinesForm.patchValue({
      name: this.data?.routines?.name,
      dataRutine: this.data?.routines?.dataRutine,
      description: this.data?.routines?.description,
    });
  }

}
