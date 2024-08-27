import { scryptSync, randomBytes, timingSafeEqual, hash } from 'crypto';

function criaHashComSal(senha) {
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

  return `${sal}:${senhaHasheada}`;
}

class Usuario {
  constructor(nome, senha) {
    this.nome = nome;
    [this.sal, this.hash] = criaHashComSal(senha).split(':');
  }

  autentica(nome, senha) {
    if (nome === this.nome) {
      const testeDeHash = scryptSync(senha, this.sal, 64);

      const hashReal = Buffer.from(this.hash, 'hex');

      const hashesCorrespondem = timingSafeEqual(testeDeHash, hashReal);

      if (hashesCorrespondem) {
        console.log('usuário autenticado com sucesso !');
        return true;
      } else {
        console.log('Usuário ou senha incorretos !');
        return false;
      }
    }
  }
}

const gm = new Usuario('Gabriel Medrado', 'senhasecreta');

console.log(gm);

// teste de sucesso
gm.autentica('Gabriel Medrado', 'senhasecreta');
