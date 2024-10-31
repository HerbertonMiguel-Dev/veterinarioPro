
import prismaClient from "../../prisma";

interface CountRequest{
  usuario_id: string;
}

class CountConsultationsService{
  async execute({ usuario_id }: CountRequest){

    const count = await prismaClient.consulta.count({
      where:{
        usuario_id: usuario_id
      }
    })

    return count;

  }
}

export { CountConsultationsService }