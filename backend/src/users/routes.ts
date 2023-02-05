import { Router } from "express";
import { encryptPass } from "../middlewares/encryptPassword";
import { isValidBodySignup } from "../middlewares/isValidBody";
import UsersController from "./controller";

const router = Router();

router.post("/signup", isValidBodySignup, encryptPass, UsersController.signup);

export default router;