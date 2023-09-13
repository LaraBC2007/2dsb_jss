//-------------------------------------------
//daqui pra baixo começa o js do site


//mudanças no titulo
//busca no site pelo titulo e armazena ele dentro da variável titulo
let titulo = document.querySelector(".titulo");
//mostra no devtools o conteudo de texto da variável titulo para fins de teste
console.log(titulo.textContent);
//altera o conteudo da variável titulo para o texto desejado
titulo.textContent = "Piriri Nutrição";

//mudanças na tabela
//armazena na variável paciente os dados do primeiro paciente
let paciente = document.querySelector("#primeiro-paciente");
//mostra no console o valor da variável 
console.log(paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");


let peso = tdPeso.textContent; 
let altura = tdAltura.textContent; 

console.log(imc); 

let tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

//validação de dados
let pesoEhValido = true;
let alturaEhValida = true;


if(peso <=0 || peso>=1000) {
    console.log("Peso inválido!");
    tdImc.textContent = "Peso inválido!"
    pesoEhValido = false;
}
if(altura <=0 || altura>= 3) {
    tdImc.textContent = "Altura inválida!";
 alturaEhValida = false;
}   

if (pesoEhValido && alturaEhValida) {
    let imc = peso / (altura*altura);
}