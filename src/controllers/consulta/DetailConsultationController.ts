import { Request, Response } from "express";
import { DetailConsultationService } from '../../services/consulta/DetailConsultationService'

class DetailConsultationController{
  async handle(request: Request, response: Response){
    const consulta_id = request.query.consulta_id as string;

    const detalheConsulta = new DetailConsultationService();

    const consulta = await detalheConsulta.execute({
      consulta_id,
    })

    return response.json(consulta)

  }
}

export { DetailConsultationController }