import { Router } from "express";
import HomeController from "../Controllers/HomeController.js";
import ContactoController from "../Controllers/ContactoController.js";
import UserController from "../Controllers/UserController.js";

const router = Router();

/* GET home page. */
router.get("/", HomeController.home);

router.post("/entrar", HomeController.login);
router.get("/sair", HomeController.logout);

/* GET users listing. */
router.get("/user", UserController.user);

/* GET home page contacto. */
router.get("/contacto", ContactoController.index);
router.get("/contacto/:id", ContactoController.show);
router.post("/contacto", ContactoController.store);
router.put("/contacto/:id", ContactoController.update);
router.delete("/contacto/:id", ContactoController.delete);

export default router;
