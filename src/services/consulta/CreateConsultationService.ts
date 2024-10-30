import prismaClient from "../../prisma";

interface ConsultationRequest{
  usuario_id: string;
  nome: string;
  preco: number;
}


class CreateConsultationService{
  async execute({ usuario_id, nome, preco }: ConsultationRequest){
    if(!nome || !preco){
      throw new Error("Error")
    }

    //verifica quanos tipos de consulta esse usuario já tem cadastrado
    const myConsultations = await prismaClient.consulta.count({
      where:{
        usuario_id: usuario_id
      }
    })

    const usuario = await prismaClient.usuario.findFirst({
      where:{
        id: usuario_id,
      },
      include:{
        assinaturas: true,
      }
    })

    if(myConsultations >= 3 && usuario?.assinaturas?.status !== 'active'){
      throw new Error("Não autorizado")
    }


    const consulta = await prismaClient.consulta.create({
      data:{
        nome: nome,
        preco: preco,
        usuario_id: usuario_id
      }
    })


    return consulta;


  }
}

export { CreateConsultationService }