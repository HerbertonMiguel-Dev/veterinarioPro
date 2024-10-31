import {Request, Response} from 'express'
import { CountConsultationsService } from '../../services/consulta/CountConsultationsService'

class CountConsultationsController{
  async handle(request: Request, response: Response){
    const usuario_id = request.usuario_id;

    const contarConsultas = new CountConsultationsService();

    const count = await contarConsultas.execute({
      usuario_id
    })

    return response.json(count);

  }
}

export { CountConsultationsController }