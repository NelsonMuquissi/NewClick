import express from 'express'
import { Router } from 'express';
import HomeController from '../Controllers/HomeController.js';

const router = Router()

/* GET home page. */
router.get('/', HomeController.home);

export default router
