import { createHash } from 'crypto';

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = this.criahash(senha);
  }

  criahash(senha) {
    return createHash('sha256').update(senha).digest('hex');
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === this.criahash(senha)) {
      console.log('usuário autenticado com sucesso !');
      return true;
    } else {
      // console.log('Usuário ou senha incorretos !');
      return false;
    }
  }
}

const usuario = new Usuario('Gabriel Medrado', 'senha123');
//console.log(usuario);

const senhasComuns = [
  'senha',
  '123456',
  'senha123',
  'admin',
  'blink182',
  'meuAniversario',
  'senha123456',
  'brasil',
  '102030',
];

senhasComuns.map((senha) => {
  if (usuario.autentica('Gabriel Medrado', senha)) {
    console.log(`A senha do usuário é: ${senha}`);
  }
});
