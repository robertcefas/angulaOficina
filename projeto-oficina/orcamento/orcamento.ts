import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-orcamento',
  imports: [FormsModule],
  templateUrl: './orcamento.html',
  styleUrl: './orcamento.css',
})
export class Orcamento {
  protected dados = {
    nome: '',
    telefone: '',
    tipo: 'Carro',
    modelo: '',
    ano: '',
    servico: '',
    detalhes: '',
  };

  protected resumo: typeof this.dados | null = null;

  protected revisar(formulario: NgForm): void {
    this.resumo = null;

    if (formulario.invalid) {
      formulario.control.markAllAsTouched();
      return;
    }

    this.resumo = { ...this.dados };
  }
}
