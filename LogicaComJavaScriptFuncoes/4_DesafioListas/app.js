// Desafio 1

function calcularIMC(altura, peso){
    alert("Vamos calcular seu IMC, digite nos próximos campos sua Altura e Peso! ");
    altura = parseFloat(prompt("Qual sua altura?"));
    peso = parseFloat(prompt("Qual seu peso? "));

    let imc = peso/(altura * altura);
    imc = imc.toFixed(2);

    if (imc < 18.5){
        alert(`Baixo peso! IMC = ${imc}`);
    } else if (imc > 18.5 && imc < 24.9){
        alert(`Peso adequado! IMC = ${imc}`);
    } else if (imc > 25 && imc < 29.9){
        alert(`Sobrepeso! IMC = ${imc}`);
    } else if (imc > 30 && imc < 34.9){
        alert(`Obesidade grau I! IMC = ${imc}`);
    } else if (imc > 35 && imc < 39.9){
        alert(`obesidade grau II! IMC = ${imc}`);
    } else {
        alert(`Obesidade EXTREMA! IMC = ${imc}`);
    }
}

// Desafio 2

function calcularFatorialDoNumero(num){
    num = prompt("Qual número quer calcular o fatorial? (veja a resposta no console)");
    if (num == 0 || num == 1){
        console.log(1);
        return 1;
    } 
    for (var i = num - 1; i >= 1; i--) {
        console.log(num);
        num *= i;
    }
    return num;
}

// Desafio 3

function converterValorEmDolar(num){
    num = parseFloat(prompt("Digite o valor em dolarés para saber o equivalente em reais: "))
    let cotacao = 4.80;
    let valorConvertido = num / cotacao;
    valorConvertido = valorConvertido.toFixed(2);

    alert(`O valor de $${num}, foi convertido em R$${valorConvertido}`);
}

// Desafio 4

function areaDoPerimetro(altura, largura){
    alert("Vamos calcular o perimetro de uma sala, digite nos próximos campos a altura e largura! ");
    altura = parseFloat(prompt("Altura: "));
    largura = parseFloat(prompt("Largura: "));
  
    perimetro = 2 * (largura + altura);

    alert(`O perímetro da sala é de: ${perimetro}`);

}

// Desafio 5

function areaDoPerimetroCircular(raio){
    raio = parseFloat(prompt("Vamos calcular o perimetro de uma sala circular, digite o valor do raio: "));
    
    const PI = 3.14;
    let perimetro = 2 * PI * raio;

    alert(`O perímetro da sala circular é de: ${perimetro}`);
}

// Desafio 6

function tabuadaDoNumero(num){
    num = parseInt(prompt("Digite um numero e veja no console sua tabuada até 10: "));
    
    for (let i = 1; i <= 10; i++){
        resultado = num * i;
        console.log(`${num} X ${i} = ${resultado}`);
    }
}