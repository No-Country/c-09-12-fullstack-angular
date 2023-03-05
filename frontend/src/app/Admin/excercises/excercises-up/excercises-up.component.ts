import { HttpHeaders } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ExercisesService } from 'src/app/shared/services/excercises/exercises.service';

enum Action {
  EDIT = 'edit',
  NEW = 'new'
}

@Component({
  selector: 'app-excercises-up',
  templateUrl: './excercises-up.component.html',
  styleUrls: ['./excercises-up.component.scss']
})

export class ExcercisesUpComponent {

  excercisesForm:FormGroup;

  date = new Date();

  actionToDo = Action.NEW;

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private formBuilder:FormBuilder,
    private excercisesService:ExercisesService,
    private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {

    this.excercisesForm = this.formBuilder.group({
      name: ['', ],
      muscle: ['', ],
      repeat: ['', ],
      weight: ['', ],
      time: ['', ],
    });

  }

  ngOnInit(): void {
    if(this.data?.exercises.hasOwnProperty('id')){
      this.actionToDo = Action.EDIT;
      this.data.title = 'Editar Ejercicio';
      this.pathFormData();
    }
  }

  onKeypressEvent($event:any){
    $event.preventDefault();
  }

  saveExcercises(){
    if(this.actionToDo == Action.NEW){
      let valueExcercises = this.excercisesForm.value;
      this.excercisesService.newExcercises(valueExcercises, this.headers).subscribe((res) => {
        this.toastr.success('Nuevo ejercicio agregado', 'Ejercicio Agregado');
        this.excercisesForm.reset();
      }, (error) => {
        this.toastr.error(error, 'Excercises Failed');
      }
      );
    } else if(this.actionToDo == Action.EDIT){
      let valueExcercises = this.excercisesForm.value;
      const excerciseId = this.data?.exercises?.id;
      this.excercisesService.updateExcercises(excerciseId, valueExcercises, this.headers).subscribe((res) => {
        this.toastr.success('El ejercicio fue editado con exito', 'Ejercicio Editado');
      }, error => {
        console.log(error);
      });
    }

  }

  private pathFormData():void {
    this.excercisesForm.patchValue({
      name: this.data?.exercises?.name,
      muscle: this.data?.exercises?.muscle,
      repeat: this.data?.exercises?.repeat,
      weight: this.data?.exercises?.weight,
      time: this.data?.exercises?.time,
    });
  }

}
