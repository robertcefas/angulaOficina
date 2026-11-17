import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServicoVeiculo {
  categoria: 'carro' | 'moto';
  titulo: string;
  descricao: string;
  tempoEstimado: string;
}

@Component({
  selector: 'app-veiculos',
  imports: [RouterLink],
  templateUrl: './veiculos.html',
  styleUrl: './veiculos.css'
})
export class Veiculos {
  filtroAtual: 'todos' | 'carro' | 'moto' = 'todos';

  listaServicos: ServicoVeiculo[] = [
    {
      categoria: 'carro',
      titulo: 'Revisão Preventiva Automotiva',
      descricao: 'Check-up completo de fluidos, filtros, correias e itens essenciais de segurança.',
      tempoEstimado: '2h'
    },
    {
      categoria: 'moto',
      titulo: 'Revisão Geral de Motocicletas',
      descricao: 'Inspeção de cabos, velas, filtros, parte elétrica e aperto geral da estrutura.',
      tempoEstimado: '1h30'
    },
    {
      categoria: 'carro',
      titulo: 'Alinhamento e Balanceamento',
      descricao: 'Ajuste computadorizado da geometria para estabilidade e menor desgaste dos pneus.',
      tempoEstimado: '1h'
    },
    {
      categoria: 'moto',
      titulo: 'Kit Relação e Corrente',
      descricao: 'Troca, lubrificação e ajuste de tensão de coroa, pinhão e corrente.',
      tempoEstimado: '45min'
    },
    {
      categoria: 'carro',
      titulo: 'Suspensão e Direção',
      descricao: 'Manutenção de amortecedores, molas, buchas, pivôs e caixa de direção.',
      tempoEstimado: '3h'
    },
    {
      categoria: 'moto',
      titulo: 'Suspensão Dianteira (Bengala)',
      descricao: 'Troca de retentores, óleo da suspensão e alinhamento de mesa.',
      tempoEstimado: '1h30'
    },
    {
      categoria: 'carro',
      titulo: 'Sistema de Freios ABS',
      descricao: 'Substituição de pastilhas, discos, fluido de freio e inspeção eletrônica.',
      tempoEstimado: '1h30'
    },
    {
      categoria: 'moto',
      titulo: 'Troca de Óleo e Filtros (Moto)',
      descricao: 'Lubrificantes de alta performance específicos para motores 4 tempos e scooters.',
      tempoEstimado: '30min'
    }
  ];

  get servicosFiltrados(): ServicoVeiculo[] {
    if (this.filtroAtual === 'todos') {
      return this.listaServicos;
    }
    return this.listaServicos.filter(item => item.categoria === this.filtroAtual);
  }

  selecionarFiltro(filtro: 'todos' | 'carro' | 'moto') {
    this.filtroAtual = filtro;
  }
}