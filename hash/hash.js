import { createHash } from 'crypto';

function criahash(senha) {
  return createHash('sha256').update(senha).digest('hex');
}

console.log(criahash('Uma string qualquer'));

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    this.hash = criahash(senha);
  }

  autentica(nome, senha) {
    if (nome === this.nome && this.hash === criahash(senha)) {
      console.log('usuário autenticado com sucesso !');
      return true;
    } else {
      console.log('Usuário ou senha incorretos !');
      return false;
    }
  }
}

const usuario = new Usuario('Gabriel Medrado', 'Minha Senha');
console.log(usuario);

//Caso de sucesso
usuario.autentica('Gabriel Medrado', 'Minha Senha');

//Caso de fracasso
usuario.autentica('Gabriel Medrado', 'Minha senha');
