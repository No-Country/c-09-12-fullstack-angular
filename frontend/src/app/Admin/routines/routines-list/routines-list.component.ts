import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Routines } from 'src/app/shared/models/rutines/rutines';
import { RoutinesUpComponent } from '../routines-up/routines-up.component';

@Component({
  selector: 'app-routines-list',
  templateUrl: './routines-list.component.html',
  styleUrls: ['./routines-list.component.scss']
})
export class RoutinesListComponent {

  routines:Routines[] = [];

  constructor(

    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    // this.getAllRoutines();
  }

  getAllRoutines(){
    // this.userService.getAllUsers().subscribe(data => {
    //   this.users = data;
    // }, error => {
    //   console.log(error)
    // })
  }

  openModal(client={}):void {
    this.dialog.open(RoutinesUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Rutina'}

    });
  }

}
