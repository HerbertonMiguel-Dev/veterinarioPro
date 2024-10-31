import {Request, Response} from 'express'
import { UpdateConsultationService } from '../../services/consulta/UpdateConsultationService'

class UpdateConsultationController{
  async handle(request: Request, response: Response){
    const usuario_id = request.usuario_id;
    const { nome, preco, status, consulta_id } = request.body;

    const atualizarConsulta = new UpdateConsultationService();

    const consulta = await atualizarConsulta.execute({
      usuario_id,
      nome,
      preco,
      status,
      consulta_id
    })

    return response.json(consulta);

  }
}

export { UpdateConsultationController }