function Calcular() {
    nome = document.getElementById("nome").value;
    horas = document.getElementById("ha").value;
    aulas = document.getElementById("hr").value;
    total = parseInt(aulas)*parseInt(horas);

    altxt = document.getElementById("ptotal").innerHTML = "Total Geral: " + nome + ", você tem " + total + " horas de aula nessa semana.";
    
    if( nome == "" || horas == "" || aulas == "") {
        altxt = document.getElementById("ptotal").innerHTML = "Algum valor não foi inserido, tente novamente!"
    }
}
