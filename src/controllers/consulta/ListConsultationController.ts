import {Request, Response} from 'express'
import { ListConsultationService } from '../../services/consulta/ListConsultationService'

class ListConsultationController{
  async handle(request: Request, response: Response){
    const usuario_id = request.usuario_id;
    const status = request.query.status as string;

    const listarConsultas = new ListConsultationService();

    const consultas = await listarConsultas.execute({
      usuario_id,
      status,
    })

    return response.json(consultas);

  }
}

export { ListConsultationController }