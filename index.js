var nome = "fulano";
var idade = 29;
var data = new Date(2022, 3, 12 );
var dataAtual = new Date();
var totalParticipantes = 55;

// início informa nome
console.log("Informe o nome:");
// fim informa nome

// início teste idade
console.log("Informe a idade:");
if (idade >= 18) {
    console.log("Selecione o evento desejado");
} else {
    console.log("inválido, inscrição somente para maiores de idade");
    // fim do algoritmo
}
// fim teste idade

// início teste data
if (data <= dataAtual) {
    console.log("Data inválida. Por favor selecione outra opção");
} else if(totalParticipantes >= 100) {
    console.log("Esgotado, limite máximo de participantes atingido");
} else {
    console.log("Casastro realizado com sucesso!");
}
//fim teste data e fim do algoritmo


