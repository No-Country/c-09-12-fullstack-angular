import { Component } from '@angular/core';

@Component({
  selector: 'app-routine-one',
  templateUrl: './routine-one.component.html',
  styleUrls: ['./routine-one.component.scss']
})

export class RoutineOneComponent {

  weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];

  constructor() {}

}
