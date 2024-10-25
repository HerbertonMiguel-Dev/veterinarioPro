import {Request, Response} from 'express' 
import { CreateUserService } from '../../services/usuario/CreateUserService'

class CreateUserController{
    async handle(request: Request, response: Response) {
      const { nome, email, senha } = request.body;
  
      const createUserService = new CreateUserService();
  
      const usuario = await createUserService.execute({
        nome,
        email,
        senha,
      });
  
      return response.json(usuario);
  
    }
  }
  
  export { CreateUserController }