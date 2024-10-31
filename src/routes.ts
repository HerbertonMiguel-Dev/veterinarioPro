import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/usuario/CreateUserController';
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'
import { UpdateUserController } from './controllers/usuario/UpdateUserController'

import { CreateConsultationController } from './controllers/consulta/CreateConsultationController'
import { ListConsultationController } from './controllers/consulta/ListConsultationController'
import { UpdateConsultationController } from './controllers/consulta/UpdateConsultationController'
import { CheckSubscriptionController } from './controllers/consulta/CheckSubscriptionController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();

// --- ROTAS USER ---
router.post('/usuarios', new CreateUserController().handle.bind(new CreateUserController()));
router.post('/sessao', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/usuarios', isAuthenticated, new UpdateUserController().handle)

// --- ROTA Consultas ---
router.post('/consulta', isAuthenticated, new CreateConsultationController().handle )
router.get('/consultas', isAuthenticated, new ListConsultationController().handle)
router.put('/consulta', isAuthenticated, new UpdateConsultationController().handle)
router.get('/consulta/check', isAuthenticated, new CheckSubscriptionController().handle)

export { router };