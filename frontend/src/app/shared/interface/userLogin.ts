export type Role = 'admin' | 'coach' | 'client';

export interface UserLogin {
  email: string;
  password: string;
};

export interface UserResponse {
  id: number;
  email:string;
  firstName:string;
  lastName:string;
  token: string;
  role:Role;
};

export interface UserSendEmail {
  email: string;
};

export interface UserResetPass {
  password: string;
  confirmPassword: string;
};
