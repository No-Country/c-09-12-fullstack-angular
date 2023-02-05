import { NextFunction, Request, Response } from "express";

export const isValidBodySignup = (req: Request, res: Response, next: NextFunction) => {
    const { nombre, apellido, edad, peso, objetivo, email, telefono, direccion, password } =
        req.body;
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (
        !nombre ||
        typeof nombre != "string" ||
        !apellido ||
        typeof apellido != "string" ||
        !edad ||
        typeof edad != "number" ||
        !peso ||
        typeof peso != "number" ||
        !objetivo ||
        typeof objetivo != "string" ||
        !email ||
        !validEmail.test(email) ||
        !telefono ||
        typeof telefono != "number" ||
        !direccion ||
        typeof direccion != "string" ||
        !password ||
        typeof password != "string" ||
        password.length < 8
    ) {
        return res.status(400).json({ sucess: false, message: "El body debe tener nombre (string), password (string > 8 caracteres), apellido (string), edad (numero), peso (numero), objetivo (string), email (email), telefono (numero), direccion (string)" })
    }
    next()
};
