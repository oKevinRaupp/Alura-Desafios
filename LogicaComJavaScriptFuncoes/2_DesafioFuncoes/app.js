// Desafio 1

function olaMundo(){
    console.log("Ola, Mundo!");
}

// Desafio 2

function exibirNoConsoleNome(nome){
    nome = prompt("Qual seu nome? ");
    console.log(`Ola, ${nome}!`);
}

// Desafio 3

function dobroDoNumero(num){
    num = parseInt(prompt("Digite um numero e veja no console o dobro do mesmo: "))
    dobro = num * 2;
    console.log(dobro);
    return dobro;
}

// Desafio 4

function mediaDeTresNumeros(num1, num2, num3){
    num1 = parseInt(prompt("Primeiro numero: "));
    num2 = parseInt(prompt("Segundo numero: "));
    num3 = parseInt(prompt("Terceiro numero: "));
    let media = (num1 + num2 + num3) / 3;
    console.log(media);
    return media;
}

// Desafio 5

function retornaMaiorNumero(num1, num2){
    alert("Digite dois numeros, o maior será impresso no console!")
    num1 = parseInt(prompt("Digite o primeiro numero: "));
    num2 = parseInt(prompt("Digite o segundo numero: "));

    if (num1 > num2){
        console.log(num1);
        return num1;
    } else {
        console.log(num2);
        return num2;
    }
}

// Desafio 6

function multiplicacaoDoNumeroPorEleMesmo(num){
    num = parseInt(prompt("Digite um numero e veja no console a multiplicação por ele mesmo: "));
    let multiplicacao = num * num;
    console.log(multiplicacao);
    return multiplicacao;
}