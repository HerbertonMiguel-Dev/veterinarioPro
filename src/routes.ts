import { Router, Request, Response } from 'express'

import { CreateUserController } from './controllers/usuario/CreateUserController';
import { AuthUserController } from './controllers/usuario/AuthUserController'
import { DetailUserController } from './controllers/usuario/DetailUserController'
import { UpdateUserController } from './controllers/usuario/UpdateUserController'

import { CreateConsultationController } from './controllers/consulta/CreateConsultationController'
import { ListConsultationController } from './controllers/consulta/ListConsultationController'
import { UpdateConsultationController } from './controllers/consulta/UpdateConsultationController'
import { CheckSubscriptionController } from './controllers/consulta/CheckSubscriptionController'
import { CountConsultationsController } from './controllers/consulta/CountConsultationsController'
import { DetailConsultationController } from './controllers/consulta/DetailConsultationController'

import { NewScheduleController } from './controllers/agendamento/NewScheduleController'
import { ListScheduleController } from './controllers/agendamento/ListScheduleController'
import { FinishScheduleController } from './controllers/agendamento/FinishScheduleController'

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
router.get('/consulta/count', isAuthenticated, new CountConsultationsController().handle)
router.get('/consulta/detalhe', isAuthenticated, new DetailConsultationController().handle)

// --- ROTA agendamento / SERVIÇOS ---
router.post('/agendamento', isAuthenticated, new NewScheduleController().handle)
router.get('/agendamento', isAuthenticated, new ListScheduleController().handle)
router.delete('/agendamento/delete', isAuthenticated, new FinishScheduleController().handle)

export { router };