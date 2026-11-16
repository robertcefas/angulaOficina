import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contatos',
  imports: [FormsModule],
  templateUrl: './contatos.html',
  styleUrl: './contatos.css'
})
export class Contatos {
  dadosFormulario = {
    nome: '',
    telefone: '',
    veiculo: 'Carro',
    assunto: '',
    mensagem: ''
  };

  enviado = false;
  nomeEnviado = '';

  enviarMensagem() {
    if (!this.dadosFormulario.nome || !this.dadosFormulario.telefone || !this.dadosFormulario.mensagem) {
      return;
    }

    this.nomeEnviado = this.dadosFormulario.nome;
    this.enviado = true;

    this.dadosFormulario = {
      nome: '',
      telefone: '',
      veiculo: 'Carro',
      assunto: '',
      mensagem: ''
    };
  }
}