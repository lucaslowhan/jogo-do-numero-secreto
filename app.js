// Nomeando o título e o parágrafo
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Tente adivinhar o número secreto entre 1 e 10.');
}
exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p', `Parabéns! Você acertou! O número secreto é ${numeroSecreto}. ${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else if(chute > numeroSecreto){
        exibirTextoNaTela('p', `O número secreto é menor que ${chute}.`);
        tentativas++;
        limparCampo();
    }else{
        exibirTextoNaTela('p', `O número secreto é maior que ${chute}.`);
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio(){
    return parseInt(Math.random() * 10 + 1);
}
function limparCampo(){
    chute = document.querySelector('input').value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}