import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/usuario/CreateUserController';

const router = Router();

// --- ROTAS USER ---
router.post('/usuarios', new CreateUserController().handle.bind(new CreateUserController()));


export { router };