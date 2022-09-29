/*Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes,
a função deverá receber os  seguintes parâmetros, peso e altura. */

import PromptSync = require('prompt-sync');
const prompt = PromptSync();

const imcC = (peso: number, altura: number) => { return peso / (Math.pow(altura, 2));
}

console.log('Qual é o seu peso: ')
const peso = Number(prompt(`--> `));

console.log(`Qual é a sua altura: `)
const altura = Number(prompt(`--> `));

const imResultado = imcC(peso, altura)
console.log(`Seu IMC é ${imResultado}`)
