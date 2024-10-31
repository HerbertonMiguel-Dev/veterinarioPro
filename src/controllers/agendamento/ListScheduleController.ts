import { Response, Request } from "express";
import { ListScheduleService } from '../../services/agendamento/ListScheduleService'

class ListScheduleController{
  async handle(request: Request, response: Response){
    const usuario_id = request.usuario_id;

    const listaAgendamento = new ListScheduleService();

    const agendamento = await listaAgendamento.execute({
      usuario_id
    })

    return response.json(agendamento);

  }
}

export { ListScheduleController }