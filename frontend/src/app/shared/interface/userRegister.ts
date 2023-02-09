import { Role } from "./userLogin";

export interface UserRegister{
    fist_name: string;
    last_name: string;
    email: string;
    password: string;
    age: number;
    registerDate: Date;
    weight: string;
    objective: string;
    level: string;
    injuries_patologies: string;
    phone_number: string;
    address: string;
    isActive: boolean;
    daysPerWeek: string;
    role: Role;
};