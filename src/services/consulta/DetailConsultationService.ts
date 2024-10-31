import prismaClient from "../../prisma";

interface DetalheRequest{
  consulta_id: string;
}

class DetailConsultationService{
  async execute({ consulta_id }:DetalheRequest ){

    const consulta = await prismaClient.consulta.findFirst({
      where:{
        id: consulta_id
      }
    })


    return consulta;

  }
}

export { DetailConsultationService }