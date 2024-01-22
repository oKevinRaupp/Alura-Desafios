// Desafio 1

let msg = "Boas vindas!";
console.log(msg);

//Desafio 2

let nome = "Kevin Raupp";
console.log(`Olá ${nome}!`);


// Desafio 3

let nomeDesafio3 = "Kevin Raupp";
alert(`Olá, ${nomeDesafio3}`);

// Desafio 4

let linguagem = prompt (`Qual sua linguagem favorita ${nomeDesafio3} ?`);
console.log(linguagem);

// Desafio 6

let valor1 = 50;
let valor2 = 10;
let resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Desafio 7

let idade = prompt ("Qual sua idade?");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// Desafio 8

let numero = prompt("Digite um número: ");

if (numero < 0) {
    alert(`O número [${numero}] é negativo`);
} else if(numero > 0){
    alert(`O número [${numero}] é positivo`);
} else {
    alert(`O número [${numero}] é zero`);
}

// Desafio 9

let numeroDesafio9 = 1;
while (numeroDesafio9 <= 10) {
    console.log(numeroDesafio9);
    numeroDesafio9++;
}

// Desafio 10

let nota = parseInt(Math.random () * 10) + 1;

if(nota >= 7){
    console.log(`Aprovado com a ${nota}, parabéns! `);
}else {
    console.log(`Reprovado com a ${nota}, :c `);
}

// Desafio 11

let numeroAleatorio = parseInt(Math.random());
console.log(numeroAleatorio);

// Desafio 12

let numeroAleatorioDesafio12 = parseInt(Math.random() * 10 ) + 1;
console.log(numeroAleatorioDesafio12);

// Desafio 13

let numeroAleatorioDesafio13 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorioDesafio13);