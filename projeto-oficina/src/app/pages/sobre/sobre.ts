import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Diferencial {
  icone: string;
  titulo: string;
  descricao: string;
}

interface NumeroDestaque {
  valor: string;
  rotulo: string;
}

@Component({
  selector: 'app-sobre',
  imports: [RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css'
})
export class Sobre {
  numeros: NumeroDestaque[] = [
    { valor: '+15 anos', rotulo: 'de experiência no mercado' },
    { valor: '+8.500', rotulo: 'carros e motos atendidos' },
    { valor: '100%', rotulo: 'de garantia nos serviços' },
    { valor: '4.9 ★', rotulo: 'avaliação média dos clientes' }
  ];

  diferenciais: Diferencial[] = [
    {
      icone: '🔍',
      titulo: 'Orçamento Transparente',
      descricao: 'Explicamos cada diagnóstico de forma clara e só executamos o serviço após a sua aprovação.'
    },
    {
      icone: '🏍️',
      titulo: 'Duas e Quatro Rodas',
      descricao: 'Estrutura completa e mecânicos especializados tanto para carros quanto para motocicletas.'
    },
    {
      icone: '⚙️',
      titulo: 'Peças de Primeira Linha',
      descricao: 'Trabalhamos apenas com componentes originais e marcas homologadas pelas montadoras.'
    },
    {
      icone: '💻',
      titulo: 'Tecnologia de Diagnóstico',
      descricao: 'Scanners automotivos atualizados e ferramentas de precisão para identificar falhas com rapidez.'
    }
  ];
}