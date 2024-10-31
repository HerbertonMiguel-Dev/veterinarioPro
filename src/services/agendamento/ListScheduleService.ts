import prismaClient from "../../prisma";

interface ListaDeAgendamentoRequest{
  usuario_id: string;
}

class ListScheduleService{
  async execute({ usuario_id }: ListaDeAgendamentoRequest){

    const agendamento = await prismaClient.servico.findMany({
      where:{
        usuario_id: usuario_id
      },
      select:{
        id: true,
        cliente: true,
        consulta: true,
      }
    })

    return agendamento;

  }
}

export { ListScheduleService }