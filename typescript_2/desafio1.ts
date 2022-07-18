const funcionario = {
    condigo: 10,
    nome: 'Joao'
}

const funcionario2: {codigo:number, nome:string} = {
    codigo: 10,
    nome: 'Joao'
}

interface Funcionario {
    codigo: number,
    nome: string
}

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'Joao';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'Joao'
}