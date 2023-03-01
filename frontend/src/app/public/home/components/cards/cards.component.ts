import { Component } from '@angular/core';
import { home } from '../../../../shared/interface/home';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  cards: home[] = [
    {
      id: 1,
      linkTitle: 'Ir a sección de musculatura',
      linkRouter: '/home/routine-one',
      alt: 'Rutina de musculatura',
      src: '../../../../../assets/cards-home/musculatura.jpg',
      title: 'Musculatura'
    },
    {
      id: 2,
      linkTitle: 'Ir a sección de definicion',
      linkRouter: '/home/routine-two',
      alt: 'Rutina de definicion',
      src: '../../../../../assets/cards-home/definicion.jpg',
      title: 'Definicion'
    },
    {
      id: 3,
      linkTitle: 'Ir a sección de Fuerza',
      linkRouter: '/home/routine-three',
      alt: 'Rutina de fuerza',
      src: '../../../../../assets/cards-home/fuerza.jpg',
      title: 'Fuerza'
    }
  ];

}


