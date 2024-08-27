const mensagemSecreta = 'Minha mensagem secreta !';

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map((caractere) => {
    const codCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codCaractere + movimentos);
  });

  return mensagemCifrada.join('');
}

function decifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map((caractere) => {
    const codCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codCaractere - movimentos);
  });

  return mensagemCifrada.join('');
}

const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
console.log(mensagemCifrada);

const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);
console.log(mensagemDecifrada);
