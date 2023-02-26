import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/models/users/user';
import { UserService } from 'src/app/shared/services/user/user.service';
import { CoachUpComponent } from '../coach-up/coach-up.component';

@Component({
  selector: 'app-coach-list',
  templateUrl: './coach-list.component.html',
  styleUrls: ['./coach-list.component.scss']
})
export class CoachListComponent {

  users:User[] = [];

  constructor(
    private userService: UserService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    // this.getAllUsers();
  }


  getAllUsers(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error)
    })
  }

  openModal(client={}):void {
    this.dialog.open(CoachUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Entrenador'}

    });
  }

}
