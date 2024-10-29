import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthUserRequest{
  email: string;
  senha: string;
} 

class AuthUserService{
  async execute({ email, senha }: AuthUserRequest){

    const usuario = await prismaClient.usuario.findFirst({
      where:{
        email: email
      },
      include:{
        assinaturas: true,
      }
    })

    if(!usuario){
      throw new Error("Email/password incorrect")
    }

    const senhaCorreta  = await compare(senha, usuario?.senha)

    if(!senhaCorreta ){
      throw new Error("Email/password incorrect")
    }

    const token = sign(
      {
        nome: usuario.nome,
        email: usuario.email,
      },
      process.env.JWT_SECRET,
      {
        subject: usuario.id,
        expiresIn: '30d'
      }
    )
    

    return {
      id: usuario?.id,
      nome: usuario?.nome,
      email: usuario?.email,
      endereco: usuario?.endereco,
      token: token,
      asassinaturas: usuario.assinaturas ? {
        id: usuario?.assinaturas?.id,
        status: usuario?.assinaturas?.status
      } : null
     }
  }
}

export { AuthUserService }