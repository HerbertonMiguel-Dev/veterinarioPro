import prismaClient from "../../prisma";

class ServicoDetalheUsuario{
  async execute(usuario_id: string){

    const usuario = await prismaClient.usuario.findFirst({
      where:{
        id: usuario_id
      },
      select:{
        id: true,
        nome: true,
        email: true,
        endereco: true,
        assinaturas:{
          select:{
            id: true,
            precoId: true,
            status: true,
          }
        }
      }
    })

    return usuario;

  }
}

export { ServicoDetalheUsuario }