function calcularIMC(){

//entrada
let Altura = document.getElementById("altura").value;
let Peso = document.getElementById("peso").value;


//processamento
let valorIMC = Peso / Math.pow(Altura, 2);


//saida
document.getElementById("calc-result").textContent = "SEU IMC: " + valorIMC.toFixed(1);
}
