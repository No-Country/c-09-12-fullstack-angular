import { Role } from "../../interface/userLogin";


export class User {
  id?:number;
  firstName!:string;
  lastName!:string;
  phoneNumber?:number;
  address?:string;
  email!:string;
  password!:string;
  registerDate?:Date;
  weight?:number;
  objetive?:string;
  level?:string;
  injuriesPatologies?:string;
  isActive!:boolean;
  daysPerWeek?:number;
  userImg?:string;
  rol!:Role;
};
