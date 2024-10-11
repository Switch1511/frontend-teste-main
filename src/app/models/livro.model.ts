import { Publicacao } from "./publicacao.model";

export class Livro extends Publicacao {
  private readonly ISBN : string;

  constructor(titulo: string, autor: string, anoPublicacao: number, ISBN: string) {
    super(titulo, autor, anoPublicacao)

    this.ISBN = ISBN
  }

  descricao(): string {
    return `${super.descricao()}, ISBN: ${this.ISBN}`;
  }
}
