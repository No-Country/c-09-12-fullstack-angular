export type Role = 'admin' | 'coach';

export interface UserLogin {
    email: string;
    password: string;
};

export interface UserResponse {
    token: string;
    userId: number;
    role: Role;
};

export interface UserSendEmail {
    email: string;
};

export interface UserResetPass {
    password: string;
    confirmPassword: string;
};
