import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Routines } from 'src/app/shared/models/rutines/rutines';
import { RoutinesUpComponent } from '../routines-up/routines-up.component';
import { RoutinesService } from '../../../shared/services/routines/routines.service';
import { HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.scss']
})
export class RoutinesListComponent {

  routines:Routines[] = [];

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
    'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private routineService:RoutinesService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    this.getAllRoutines();
  }

  getAllRoutines(){
    this.routineService.getAllRoutines(this.headers).subscribe(data => {
      this.routines = data;
    }, error => {
      console.log(error)
    })
  }

  openModal(routines={}):void {
    this.dialog.open(RoutinesUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Rutina', routines}

    });
  }

  deleteRoutine(id:any){
    this.routineService.deleteRoutine(id, this.headers).subscribe(data => {
      this.toastr.success('El producto fue eliminado con exito', 'Producto Eliminado');
      this.getAllRoutines();
    }, error => {
      this.toastr.error(error, 'Failed Delete');
    });
  }

}
