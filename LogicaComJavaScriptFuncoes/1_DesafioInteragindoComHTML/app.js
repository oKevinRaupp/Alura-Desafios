// Desafio 1

let h1 = document.querySelector("h1");
h1.innerHTML = "Hora do Desafio";

// Desafio 2

function exibirNoConsole(){
    console.log("O botão foi clicado! ");
}

// Desafio 3

function exibirAlerta(){
    alert("Eu amo JavaScript");
}

// Desafio 4

function promptCidade(){
    let cidade = prompt("Diga o nome de uma cidade no Brasil: ");

    alert(`Estive em ${cidade} e lembrei de você`);
}

// Desafio 5

function somar(){
    alert("Vou te pedir dois numeros, e depois vou mostrar a soma deles! ")
    let num1 = parseInt(prompt("Primeiro numero: "));
    let num2 = parseInt(prompt("Segundo numero: "));
    let soma = num1 + num2;

    alert(`O resultado da soma de [${num1}] + [${num2}] é igual a [${soma}]`);
}