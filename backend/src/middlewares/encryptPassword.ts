import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';

export const encryptPass = async (req: Request, res: Response, next: NextFunction) => {
    const hashedPass = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPass;
    next()
}

export const samePass = async (password: string, passwordOnDB: string) => {
    const compare = await bcrypt.compare(password, passwordOnDB);
    return compare;
}   