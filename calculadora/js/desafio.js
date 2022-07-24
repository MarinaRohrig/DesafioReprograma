var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");
var spanResposta = document.querySelector("#resposta");

function calcularDesafio(){
    var valorCobrado = (inputValorHora.valueAsNumber) * (inputHorasProjeto.valueAsNumber);
    spanResposta.textContent = "O valor cobrado deve ser: R$ " + valorCobrado.toFixed(2);
}