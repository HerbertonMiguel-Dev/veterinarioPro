import {Request, Response} from 'express'
import { ServicoDetalheUsuario } from '../../services/usuario/DetailUserService'

class DetailUserController{
  async handle(request: Request, response: Response){

    const userDetailService = new ServicoDetalheUsuario();

    const detailUser = await userDetailService.execute();

    return response.json(detailUser);

  }
}

export { DetailUserController }