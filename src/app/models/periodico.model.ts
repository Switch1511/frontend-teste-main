import { Publicacao } from "./publicacao.model";

export class Periodico extends Publicacao {
  private readonly ISSN : string;

  constructor(titulo: string, autor: string, anoPublicacao: number, ISSN: string) {
    super(titulo, autor, anoPublicacao)

    this.ISSN = ISSN
  }

  descricao(): string {
    return `${super.descricao()}, ISSN: ${this.ISSN}`;
  }
}
