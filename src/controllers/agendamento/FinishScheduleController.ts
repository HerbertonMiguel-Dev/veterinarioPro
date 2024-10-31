import { Request, Response } from 'express';
import { FinishScheduleService } from '../../services/agendamento/FinishScheduleService';

class FinishScheduleController {
    async handle(request: Request, response: Response) {
        const usuario_id = request.usuario_id;
        const agendamento_id = request.query.agendamento_id as string;

        const finalizarServicoAgendado = new FinishScheduleService();

        const agendamento = await finalizarServicoAgendado.execute({
            usuario_id,
            agendamento_id,
        });

        return response.json(agendamento);
    }
}

export { FinishScheduleController };
