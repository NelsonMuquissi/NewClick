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
router.get("/show/:id", authentication, ContactoController.show);
router.post("/contacto", authentication, ContactoController.newstore);
router.get("/update/:id", authentication, ContactoController.up);
router.post("/update/:id", authentication,ContactoController.update);
router.get("/del/:id", authentication, ContactoController.delete);

router.get('/addcontacto', authentication, ContactoController.store)

export default router;
