/*
function soma(a: number,b: number){
    return a + b;
}

// no typescript nao vai aceitar soma("a","b");

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(alturaEmDecibeis: number): void;
}

type IAnimalType = {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimalType {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimalType{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animalDomestico: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
    visaoNoturna: true
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}bB`)
}

animal.executarRugido(20);

const felino: IFelino = {
    nome: 'Leao',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}bB`)
}


const input = document.getElementById('input') as HTMLInputElement; // precisa disso para informar que é um input e acessar as propriedades do input.
input.value;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

// GENERIC TYPES

function adicionaApendiceALista<T>(array: any[], valor: T){
    return array.map(item => item + valor);
}

adicionaApendiceALista([1,2,3], 1);
adicionaApendiceALista(['A','B','C'], 'd');

function adicionaApendiceALista2<T>(array: T[], valor: T){ // USAMOS T NORMALMENTE; MAS SE COLOCASSE O NaoSei TAMBEM IRIA FUNCIONAR
    return array.map(() => valor);
}

//adicionaApendiceALista2([1,2,3], 'd'); erro pq esperava tudo igual



interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        // redirecionar para a área de administracao
    }

    // redirecionar para a área de usuario
}



interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'; //esse atributo no caso será opcional
}

function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }

    //redirecionar para a area do usuario
}

interface Cachorro {
    readonlynome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

/*
const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14,

}


class MeuCachorro implements CachorroSomenteLeitura{
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);

cao.idade;



interface Estudante {
    name: string;
    idade: number;
}

interface Estudante {
    serie: string;
}

const estudante: Estudante = {
    name: 'oi',
    idade: 21,
    serie: '1'
}


import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova funcao');
    }
});

// $('body').novaFuncao(); quando comenta no arquivo typings.d.ts nao vai achar mais 

export const numero = 2;


*/

interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{ // ISSO VAI OMITIR O ATRIBUTO NACIONALIDADE; TEM MUITOS OUTROS ALEM DO OMIT

}

const brasileiro: Brasileiro = {
    nome: 'Rafael',
    idade: 32
}