import { Router } from "express";
import HomeController from "../Controllers/HomeController.js";
import ContactoController from "../Controllers/ContactoController.js";
import UserController from "../Controllers/UserController.js";
import authentication from "./authentication.js";

const router = Router();

/* GET home page. */
router.get("/", HomeController.home);

router.post("/entrar", HomeController.login);
router.get("/sair", HomeController.logout);

/* GET users listing. */
router.get("/user", UserController.user);

/* GET home page contacto. */
router.get("/contacto", authentication ,ContactoController.index);
router.get("/contacto/:id", authentication, ContactoController.show);
router.get("/addcontacto", authentication, ContactoController.redi);
router.post("/contacto", authentication, ContactoController.store);
router.put("/contacto/:id", authentication,ContactoController.update);
router.delete("/contacto/:id", authentication, ContactoController.delete);

export default router;
