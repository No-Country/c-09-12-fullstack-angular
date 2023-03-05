import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user/user.service';

import { User } from 'src/app/shared/models/users/user';

import { ClientsUpComponent } from '../clients-up/clients-up.component';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.scss']
})
export class ClientsListComponent implements OnInit {

  users:User[] = [];

  datosLocalStorage = JSON.parse(localStorage.getItem("user")!);
  tokenLocalStorage = this.datosLocalStorage.token;


  headers = new HttpHeaders({
      'Authorization': `Bearer ${this.tokenLocalStorage}`
  });

  constructor(
    private userService: UserService,
    private toastr:ToastrService,
    private dialog: MatDialog
    ) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.userService.getAllUsers(this.headers).subscribe(data => {
      this.users = data;
      console.log(data)
    }, error => {
      console.log(error)
    })
  }

  openModal(client={}):void {
    this.dialog.open(ClientsUpComponent, {
      height: 'auto',
      width: '600px',
      data: { title: 'Agregar Usuario', client}

    });
  }


}
