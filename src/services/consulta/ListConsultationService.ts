import prismaClient from "../../prisma";

interface ConsultationRequest{
  usuario_id: string;
  status: boolean | string;
}

class ListConsultationService{
  async execute({ usuario_id, status }: ConsultationRequest){

    const consulta = await prismaClient.consulta.findMany({
      where:{
        usuario_id: usuario_id,
        status: status === 'true' ? true : false
      }
    })

    return consulta;

  }
}

export { ListConsultationService }
