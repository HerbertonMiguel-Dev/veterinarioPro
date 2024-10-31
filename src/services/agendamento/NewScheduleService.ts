import prismaClient from "../../prisma";

interface NovoAgendamentoRequest{
  usuario_id: string;
  consulta_id: string;
  cliente: string;
}

class NewScheduleService{
  async execute({ usuario_id, consulta_id, cliente }: NovoAgendamentoRequest){

    if(cliente === '' || consulta_id === ''){
      throw new Error("Erro ao agendar novo serviço.")
    }

    const agendamento = await prismaClient.servico.create({
      data:{
        cliente,
        consulta_id,
        usuario_id
      }
    })

    return agendamento;

  }
}

export { NewScheduleService }