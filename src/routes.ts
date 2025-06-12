import express from 'express'
import { categoriesController } from './controllers/categoriesController';

export const router = express.Router();

router.get('/categoreis', categoriesController.index);