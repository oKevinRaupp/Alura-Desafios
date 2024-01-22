// Desafio 1

let contador = 1;

while (contador <= 10){
    console.log(contador);
    contador++;
}

// Desafio 2

let contadorDesafio2 = 10;

while (contadorDesafio2 >= 1){
    console.log(contadorDesafio2);
    contadorDesafio2--;
}

// Desafio 3

let contadorDesafio3 = prompt("Digite um número: ");

if (contadorDesafio3 > 0){
    while (contadorDesafio3 >= 0) {
        console.log(contadorDesafio3);
        contadorDesafio3--;
    }    
} else {
    prompt("o numero precisa ser maior que 0. ");
}

// Desafio 4

let contadorDesafio4 = 0;
let numeroFinal = prompt('Digite um número: ');

while(contadorDesafio4 <= numeroFinal){
    console.log(contadorDesafio4)
    contadorDesafio4++;
}