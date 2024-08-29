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

const usuario = new Usuario('Gabriel Medrado', '1337');
//console.log(usuario);

for (let senhaTeste = 0; senhaTeste < 10000; senhaTeste++) {
  if (usuario.autentica('Gabriel Medrado', senhaTeste.toString())) {
    console.log(`A senha do usuário é ${senhaTeste}`);
  }
}
