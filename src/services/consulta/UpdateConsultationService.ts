import prismaClient from "../../prisma";

interface ConsultationRequest{
  usuario_id: string;
  consulta_id: string;
  nome: string;
  preco: number;
  status: boolean | string;
}

class UpdateConsultationService{
  async execute({ usuario_id, consulta_id, nome, preco, status = true}:ConsultationRequest){

    const usuario = await prismaClient.usuario.findFirst({
      where:{
        id: usuario_id
      },
      include:{
        assinaturas:true,
      }
    })

    if(usuario?.assinaturas?.status !== 'active'){
      throw new Error("não autorizado")
    }

    const consulta = await prismaClient.consulta.update({
      where:{
        id: consulta_id,
      },
      data:{
        nome: nome,
        preco: preco,
        status: status === true ? true : false,
      }
    })

    return consulta;

  }
}

export { UpdateConsultationService }