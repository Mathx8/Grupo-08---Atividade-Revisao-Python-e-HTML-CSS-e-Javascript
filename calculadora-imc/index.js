function CalcularIMC() {
    event.preventDefault();
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    pesoReal = peso/100;
    alturaReal = altura*100;

    const imc = pesoReal / (alturaReal * alturaReal);

    let resultado = '';
    let rIMC = '';

    if (imc <= 18.5) {
        rIMC = "Abaixo do peso"
    } else if (imc <= 18.6 && imc >= 24.9) {
        return rIMC = "Peso Normal"
    } else if (imc <= 25 && imc >= 29.9) {
        return rIMC = "Sobrepeso"
    } else {
        return rIMC = "Obesidade"
    }

    resultado += `<h1>${imc}. Isso significa que você está ${rIMC}</h1>`;

    document.querySelector("span").innerHTML = resultado;
};