import { Router } from "express";
import UserController from "../Controllers/UserController.js";

const router = Router();

/* GET users listing. */
router.get("/", UserController.user);

export default router;
