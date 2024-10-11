import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a1.4-scss-funcao',
  templateUrl: './a1.4-scss-funcao.component.html',
  styleUrls: ['./a1.4-scss-funcao.component.scss']
})
export class A14ScssFuncaoComponent implements OnInit {
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit(): void {
  }

}
