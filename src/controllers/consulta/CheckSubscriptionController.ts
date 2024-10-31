import {Request, Response} from 'express'
import { CheckSubscriptionService } from '../../services/consulta/CheckSubscriptionService'

class CheckSubscriptionController{
  async handle(request: Request, response: Response){
    const usuario_id = request.usuario_id;

    const verificarAssinatura = new CheckSubscriptionService();

    const status = await verificarAssinatura.execute({
      usuario_id
    })

    return response.json(status);

  }
}

export { CheckSubscriptionController }