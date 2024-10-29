import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/usuario/CreateUserController';
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'

const router = Router();

// --- ROTAS USER ---
router.post('/usuarios', new CreateUserController().handle.bind(new CreateUserController()));
router.post('/sessao', new AuthUserController().handle)
router.get('/me', new DetailUserController().handle)

export { router };