import { Component } from '@angular/core';
import { authors } from '../../../interface/authors';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent {
  authors: authors[] = [
    {
      id: uuidv4(),
      linkedinURL: 'https://www.linkedin.com/in/vallejosjoseluis/',
      githubURL: 'https://github.com/NikolaiKoz',
      name: 'Jose Luis Vallejos',
    },
    {
      id: uuidv4(),
      linkedinURL: 'https://www.linkedin.com/in/sharonormachea/',
      githubURL: 'https://github.com/SharonOrmachea',
      name: 'Sharon Ormachea',
    },
    {
      id: uuidv4(),
      linkedinURL: 'https://www.linkedin.com/in/tony-ospino-parra-276454167/',
      githubURL: 'https://github.com/TonyOP46',
      name: 'Tony Ospino Parra',
    },
  ];
}
