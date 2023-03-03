import { Role } from '../../interface/userLogin';

export class User{
  id?: number;
  firstName!:string;
  lastName!:string;
  email!:string;
  password!:string;
  registerDate?: Date;
  weight?:number;
  objetive?: string;
  level?: string;
  injuriesPatologies?: string;
  phoneNumber?: number;
  address?: string;
  isActive?: boolean;
  daysPerWeek?: number;
  userImg?: string;
  rol!: Role;
  token?:string;
}

