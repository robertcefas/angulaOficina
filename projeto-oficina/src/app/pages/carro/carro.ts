import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface ServicoCarro {
  titulo: string;
  descricao: string;
  tempoEstimado: string;
}

@Component({
  selector: 'app-carro',
  imports: [RouterLink],
  templateUrl: './carro.html',
  styleUrl: './carro.css'
})
export class Carro {
  servicosAutomotivos: ServicoCarro[] = [
    {
      titulo: 'Revisão Preventiva',
      descricao: 'Check-up completo de fluidos, filtros, correias e itens essenciais de segurança.',
      tempoEstimado: '2h'
    },
    {
      titulo: 'Troca de Óleo e Filtros',
      descricao: 'Lubrificantes sintéticos e semissintéticos seguindo a especificação da montadora.',
      tempoEstimado: '45min'
    },
    {
      titulo: 'Alinhamento e Balanceamento',
      descricao: 'Ajuste computadorizado da geometria para estabilidade e menor desgaste dos pneus.',
      tempoEstimado: '1h'
    },
    {
      titulo: 'Sistema de Freios',
      descricao: 'Substituição de pastilhas, discos, fluido de freio e inspeção do sistema ABS.',
      tempoEstimado: '1h30'
    },
    {
      titulo: 'Suspensão e Direção',
      descricao: 'Manutenção de amortecedores, molas, buchas, pivôs e caixa de direção.',
      tempoEstimado: '3h'
    },
    {
      titulo: 'Injeção Eletrônica',
      descricao: 'Diagnóstico computadorizado via scanner para identificar falhas no motor.',
      tempoEstimado: '1h'
    }
  ];
}