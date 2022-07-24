var inputSalario = document.querySelector("#ganho-mes");
var inputHorasDia = document.querySelector("#horas-dia");
var spanFinal = document.querySelector("#resposta");
function calcularValorHora(){
    // Aqui usamos o valor de dias úteis no mês como 22.
    var totalHorasMes = inputHorasDia.valueAsNumber * 22;
    var valorHora = inputSalario.valueAsNumber / totalHorasMes;
    spanFinal.textContent = "R$ " + valorHora.toFixed(2);

}

