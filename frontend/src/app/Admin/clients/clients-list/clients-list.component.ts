import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user/user.service';

import { User } from 'src/app/shared/models/users/user';

import { ClientsUpComponent } from '../clients-up/clients-up.component';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  users:User[] = [];

  constructor(
    private userService: UserService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {

  }

  ngOnInit(): void {
    // this.getAllTours();
  }


  getAllTours(){
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error)
    })
  }

  openModal(client={}):void {
    this.dialog.open(ClientsUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Fecha'}

    });
  }


}
