var inputSalario = document.querySelector("#ganho-mes");
var inputHorasDia = document.querySelector("#horas-dia");
var spanFinal = document.querySelector("#resposta");
function calcularValorHora(){
    // Aqui usamos o valor de dias �teis no m�s como 22.
    var totalHorasMes = inputHorasDia.valueAsNumber * 22;
    var valorHora = inputSalario.valueAsNumber / totalHorasMes;
    spanFinal.textContent = "R$ " + valorHora.toFixed(2);

}

