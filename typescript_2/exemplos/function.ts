function somarValoresNumericos(numero1: number, numero2: number): number{ // bom colocar isso para informar o que a funcao vai retornar
    return numero1 + numero2;
}

console.log(somarValoresNumericos(1,3));

function printaValoresNumericos(numero1: number, numero2: number): void{
    console.log(numero1 + numero2);
}

function somarValoresNumericosETratar(numero1: number, numero2: number, callback: (numero: number) => number): number{ // bom colocar isso para informar o que a funcao vai retornar
    let resultado = numero1 + numero2;
    return callback(resultado);
}

function aoQuadrado(numero: number){
    return numero * numero;
}

console.log(somarValoresNumericosETratar(1,3,aoQuadrado));

function dividirPorEleMesmo(numero: number): number{
    return numero / numero;
}

console.log(somarValoresNumericosETratar(1,3,dividirPorEleMesmo));