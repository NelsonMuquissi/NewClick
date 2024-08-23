import { Router } from 'express';
import HomeController from '../Controllers/HomeController.js';
import ContactoController from '../Controllers/ContactoController.js';

const router = Router()

/* GET home page. */
router.get('/', HomeController.home);

router.post('/entrar', ContactoController.index)
router.get('/sair', HomeController.logout)

export default router