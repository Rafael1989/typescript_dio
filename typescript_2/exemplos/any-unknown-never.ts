let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'teste';
anyEstaDeVolta = 5;
let stringTest: string = 'verificar';
stringTest = anyEstaDeVolta;
let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = 'vai sim';

let stringTest2: string = 'agora vai';
//stringTest2 = unknownValor; NAO ACEITA UNKNOWN; TEM QUE VERIFICAR SE É STRING MESMO ANTES O ANY DEIXA; O UNKNOWN NAO

if(typeof unknownValor === 'string'){
    stringTest2 = unknownValor;
}

function jogaErro(erro: string, codigo: number): never{ // never é quando acontece algo que interrompe
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500);
