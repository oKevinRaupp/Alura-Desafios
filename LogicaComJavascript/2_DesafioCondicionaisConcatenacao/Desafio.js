// Desafio 1

let dia = prompt("Qual dia da semana é hoje? ");
dia = dia.toLocaleLowerCase;

if (dia == "sabado" || dia == "domingo" || dia == "sábado"){ 
    alert("Bom fim de semana");
} else { 
    alert("Boa semana");
} 

// Desafio 2

let numero = prompt("Digite um número positivo ou negativo: ");

if (numero > 0){
    alert(`O número: [${numero}] é positivo`);
} else if (numero < 0) {
    alert(`O número: [${numero}] é negativo`);
} else {
    alert(`O número: [${numero}] é zero`);
}

// Desafio 3

let pontuacao = 100;

if (pontuacao >= 100){
    alert("Parabéns, você venceu!");
} else {
    alert("Tente novamente para ganhar.");
}

// Desafio 4

let saldoConta = prompt("Qual o saldo na sua conta? ");

if(saldoConta > 1) {
    alert (`Você tem R$${saldoConta} reais na sua conta!`);
} else if(saldoConta < 1){
    alert(`Você tem R$${saldoConta} centavos na sua conta`);
}

// Desafio 5

let nome = prompt("Qual o seu nome? ");

alert(`Bem-vindo(a), ${nome}`);