import { Router } from "express";
import MyUserController from "../controller/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";



const router = Router();

// Route for creating a user
router.post("/",jwtCheck,MyUserController.createCurrentUser);
router.put("/",jwtCheck,jwtParse,validateMyUserRequest, MyUserController.updateCurrentUser)

export default router;
