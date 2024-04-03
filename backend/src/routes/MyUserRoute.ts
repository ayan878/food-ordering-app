import { Router } from "express";
import MyUserController from "../controller/MyUserController";


const router = Router();

// Route for creating a user
router.post("/",MyUserController.createCurrentUser);

export default router;
