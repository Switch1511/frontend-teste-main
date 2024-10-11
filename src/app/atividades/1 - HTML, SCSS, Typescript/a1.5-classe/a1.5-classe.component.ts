import { Component, OnInit } from '@angular/core';
import { Livro, Periodico, Publicacao } from 'src/app/models';

@Component({
  selector: 'app-a1.5-classe',
  templateUrl: './a1.5-classe.component.html',
  styleUrls: ['./a1.5-classe.component.scss']
})
export class A15ClasseComponent implements OnInit {

  publicacao: Publicacao = new Publicacao('1984', 'George Orwell', 1949);

  periodico: Periodico = new Periodico('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'ISBN1');

  livro: Livro = new Livro('Orgulho e Preconceito', 'Jane Austen', 1813, 'ISBN2');


  constructor() { }

  ngOnInit(): void { }

  getObjetoString(obj: Publicacao | Livro | Periodico): string {
    return JSON.stringify(obj, null, 2);
  }

}
