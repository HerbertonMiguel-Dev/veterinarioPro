import prismaClient from "../../prisma";

interface UserRequest{
  usuario_id: string;
  nome: string;
  endereco: string;
}

class UpdateUserService{
  async execute({ usuario_id, nome, endereco }: UserRequest){

    try{
      const usuarioJaExiste = await prismaClient.usuario.findFirst({
        where:{
          id: usuario_id,
        }
      })

      if(!usuarioJaExiste){
        throw new Error("Usuario não existe!");
      }

      const usuarioAtualizado = await prismaClient.usuario.update({
        where:{
          id: usuario_id
        },
        data:{
          nome,
          endereco,
        },
        select:{
          nome: true,
          email: true,
          endereco: true,
        }
      })

      return usuarioAtualizado;

    }catch(err){
      console.log(err);
      throw new Error("Erro ao atualizar o usuario!")
    }

  }
}

export { UpdateUserService }