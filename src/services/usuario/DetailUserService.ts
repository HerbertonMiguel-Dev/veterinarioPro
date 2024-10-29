import prismaClient from "../../prisma";

class ServicoDetalheUsuario{
  async execute(){
    return { ok: true }
  }
}

export { ServicoDetalheUsuario }