function CalcularIMC(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const span = document.getElementById("resultado");

    if (!peso) {
        document.querySelector("span").innerHTML = "<p>Digite seu peso!</p>";
        span.style.display = "flex";
        span.style.color = "red";
        return;
    }
    if (!altura || altura <= 0) {
        document.querySelector("span").innerHTML = "<p>Digite a altura corretamente!</p>";
        span.style.display = "flex";
        span.style.color = "red";
        return;
    }
    const imc = peso / (altura * altura);

    let rIMC = '';

    if (imc <= 18.5) {
        rIMC = "Abaixo do peso";
    } else if (imc <= 24.9) {
        rIMC = "Peso Normal";
    } else if (imc <= 29.9) {
        rIMC = "Sobrepeso";
    } else {
        rIMC = "Obesidade";
    }

    const resultado = `${imc.toFixed(2)} - ${rIMC}`;
    span.style.display = "flex";
    span.style.fontSize = "1.2rem";
    document.querySelector("span").innerHTML = resultado;
}