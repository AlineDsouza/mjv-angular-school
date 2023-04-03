import { Component } from '@angular/core';
import { colaborador } from '../models/colaboradores.module';

@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.scss'],
})
export class ColaboradoresComponent {
  titulo = 'Colaboradores';
 
  indiceElemento: number | null = null;

  colaboradores: Array<colaborador> = [
    {
      id: 19,
      nome: 'Talita Nunes',
      salario: 4000,
      cargo: 'Dev Jr',
      imagem:
        'https://images.pexels.com/photos/9490219/pexels-photo-9490219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: false
    },
    {
      id: 19,
      nome: 'Noura Pink',
      salario: 4000,
      cargo: 'Dev Jr',
      imagem:
        'https://images.pexels.com/photos/3021563/pexels-photo-3021563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
    {
      id: 7,
      nome: 'Nathan Carlos Exercicio',
      salario: 4500,
      cargo: 'Dev PI',
      imagem:
        'https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
    {
      id: 9,
      nome: 'Ana Blue',
      salario: 3900,
      cargo: 'Tech Recruiter',
      imagem:
        'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
    {
      id: 3,
      nome: 'Lua Oli',
      salario: 9000,
      cargo: 'Tech Lead',
      imagem:
        'https://images.pexels.com/photos/1644924/pexels-photo-1644924.jpeg?auto=compress&cs=tinysrgb&w=400',
        status: true
    },
    {
      id: 5,
      nome: 'Lúcio Santos',
      salario: 1000,
      cargo: 'Estagiário',
      imagem:
        'https://images.pexels.com/photos/2033287/pexels-photo-2033287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status:true
    },
    {
      id: 14,
      nome: 'Joe Mars',
      salario: 1000,
      cargo: 'Estagiário',
      imagem:
        'https://images.pexels.com/photos/7752813/pexels-photo-7752813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: false
    },
    {
      id: 15,
      nome: 'Sophia Sol',
      salario: 1000,
      cargo: 'Estagiário',
      imagem:
        'https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
    {
      id: 11,
      nome: 'Davi Dan',
      salario: 8000,
      cargo: 'Dev Pleno',
      imagem:
        'https://images.pexels.com/photos/8177853/pexels-photo-8177853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
    {
      id: 4,
      nome: 'Amala Silva',
      salario: 10000,
      cargo: 'Dev Sênior',
      imagem:
        'https://images.pexels.com/photos/6923415/pexels-photo-6923415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        status: true
    },
  ];

  exibeInfoSimNao(indice: number) {
    if (indice === this.indiceElemento) {
      this.indiceElemento = null;
      return;
    }
    this.indiceElemento = indice;
  }
}
