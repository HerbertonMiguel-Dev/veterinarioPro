import {Request, Response } from 'express'
import { NewScheduleService } from '../../services/agendamento/NewScheduleService'


class NewScheduleController{
  async handle(request: Request, response: Response){
    const { consulta_id, cliente } = request.body;
    const usuario_id = request.usuario_id;

    const novoAgendamento = new NewScheduleService();

    const agendamento = await novoAgendamento.execute({
      usuario_id,
      consulta_id,
      cliente,
    })

    return response.json(agendamento);


  }
}

export { NewScheduleController }