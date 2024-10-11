export class Publicacao {
  private readonly titulo: string;
  private readonly autor: string;
  private readonly anoPublicacao: number;

  constructor(titulo: string, autor: string, anoPublicacao: number) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  descricao(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}`;
  }
}
