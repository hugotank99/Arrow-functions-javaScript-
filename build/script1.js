"use strict";
/*Crie uma um programa de saúde, nesse programa desenvolva uma Arrow functions que calcula o imc de pacientes,
a função deverá receber os  seguintes parâmetros, peso e altura. */
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var imcC = function (peso, altura) {
    return peso / (Math.pow(altura, 2));
};
console.log('Qual é o seu peso: ');
var peso = Number(prompt("--> "));
console.log("Qual \u00E9 a sua altura: ");
var altura = Number(prompt("--> "));
var imResultado = imcC(peso, altura);
console.log("Seu IMC \u00E9 ".concat(imResultado));
