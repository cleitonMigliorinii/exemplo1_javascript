//Coletar valores do HTML
const inputValor1 = document.querySelector("#valor1");
const inputValor2 = document.querySelector("#valor2");
const inputResultado = document.querySelector("#resultado");

const buttonSomar = document.querySelector("#buttonSomar");

//Atribuir evento de click para o button
buttonSomar.addEventListener("click", somarValores);

//funcao de calcular
function somarValores(){
    
    //obter valor do input
    // value == string
    let valor1 = inputValor1.value;
    let valor2 = inputValor2.value;

    //Converver para inteiro ou perseFloat
    let valor1Number = parseInt(valor1);
    let valor2Number = parseInt(valor2);

    if(valor1Number < 0 || valor2Number < 0){
        alert("VALORES NEGATIVOS");
    }

    inputResultado.value = valor1Number + valor2Number;

}