import { Component } from '@angular/core';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss']
})
export class ColaboradoresComponent {
  
  titulo = "Colaboradores";

  colaborador = {
    id: 7,
    nome:'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev PI'
  }

  colaborador02 = {
    id: 8,
    nome: 'Maria Art',
    salario: 4100,
    cargo: 'Ux/Ui'
  }

  colaborador03 = {
    id: 9,
    nome: 'Ana Blue',
    salario: 3900,
    cargo: 'Tech Recruiter'
  }

}


