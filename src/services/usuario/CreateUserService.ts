import prismaClient from '../../prisma'
import { hash } from 'bcryptjs'

interface UserRequest{
    nome: string;
    email: string;
    senha: string;
  }

class CreateUserService{
    async execute({ nome, email, senha }: UserRequest ){

      if(!email){
        throw new Error("Email incorreto");
      }

      const usuarioJaExiste = await prismaClient.usuario.findFirst({
        where:{
          email: email
        }
      })

      if(usuarioJaExiste){
        throw new Error("User ou email já existe");
      }

      const passwordHash = await hash(senha, 8)

      const usuario = await prismaClient.usuario.create({
        data:{
          nome: nome,
          email: email,
          senha: passwordHash
        },
        select:{
          id: true,
          nome:true,
          email: true,
        }
      })

      return usuario;
  
  
      return { ok: "TESTE SUCESSO" }
  
    }
  }
  
  export { CreateUserService }