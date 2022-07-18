// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var somaTotal = 0;
if (campoSaldo != undefined) {
    campoSaldo.innerHTML = "0";
}
function somarAoSaldo(soma) {
    somaTotal += Number(soma);
    if (campoSaldo != undefined) {
        campoSaldo.innerHTML = somaTotal.toString();
    }
}
function limparSaldo() {
    somaTotal = 0;
    if (campoSaldo != undefined) {
        campoSaldo.innerHTML = '';
    }
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma === null || soma === void 0 ? void 0 : soma.value);
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */ 
