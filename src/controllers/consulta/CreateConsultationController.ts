import {Request, Response} from 'express'
import { CreateConsultationService } from '../../services/consulta/CreateConsultationService'

class CreateConsultationController{
  async handle(request: Request, response: Response){
    const { nome, preco } = request.body;
    const usuario_id = request.usuario_id;

    const createConsultationService = new CreateConsultationService();

    const consulta = await createConsultationService.execute({
      usuario_id,
      nome,
      preco,
    })

    return response.json(consulta)

  }
}

export { CreateConsultationController }