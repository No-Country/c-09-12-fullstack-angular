import { Request, Response } from "express";
import { db } from '../services/db';
import { v4 as uuidv4 } from 'uuid';


const getAllUsers = async (req: Request, res: Response) => {
    try {

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ sucess: false, message: 'Error trying to get all users' })
    }
}

const signup = async (req: Request, res: Response) => {
    try {
        req.body.id = uuidv4();
        console.log(req.body)
        await db('usuarios').insert(req.body)
        res.status(200).json({ success: true, message: 'Usuario registrado correctamente' })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ sucess: false, message: 'Error trying to get all users' })
    }
};

const getUserById = async (req: Request, res: Response) => {
    try {

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ sucess: false, message: 'Error trying to get the user' })
    }
};

const UsersController = {
    getAllUsers,
    getUserById,
    signup
}

export default UsersController;