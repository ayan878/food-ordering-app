import { Router } from "express";
import MyUserController from "../controller/MyUserController";
import { jwtCheck } from "../middleware/auth";


const router = Router();

// Route for creating a user
router.post("/",jwtCheck,MyUserController.createCurrentUser);

export default router;
