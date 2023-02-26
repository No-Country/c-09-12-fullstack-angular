import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Excercises } from 'src/app/shared/models/excercises/excercises';
import { ExcercisesUpComponent } from '../excercises-up/excercises-up.component';

@Component({
  selector: 'app-excercises-list',
  templateUrl: './excercises-list.component.html',
  styleUrls: ['./excercises-list.component.scss']
})
export class ExcercisesListComponent {

  excercises:Excercises[] = [];

  constructor(

    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    // this.getAllExcercises();
  }


  getAllExcercises(){
    // this.userService.getAllExcercises().subscribe(data => {
    //   this.users = data;
    // }, error => {
    //   console.log(error)
    // })
  }

  openModal(client={}):void {
    this.dialog.open(ExcercisesUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Ejercicio'}

    });
  }

}
