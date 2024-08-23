import { Router } from "express";
import ContactoController from "../Controllers/ContactoController.js";

const router = Router();

/* GET home page. */
router.get("/", ContactoController.index);

export default router;
