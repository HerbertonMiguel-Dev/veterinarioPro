import {Request, Response} from 'express'
import { ServicoDetalheUsuario } from '../../services/usuario/DetailUserService'

class DetailUserController{
  async handle(request: Request, response: Response){

    const usuario_id  = request.usuario_id ;

    

    const userDetailService = new ServicoDetalheUsuario();

    const detailUser = await userDetailService.execute(usuario_id);

    return response.json(detailUser);

  }
}

export { DetailUserController }