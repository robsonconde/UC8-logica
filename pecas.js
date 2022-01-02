var listaPecas = ["Amortecerdor","Filtro do Ar", "Motor"];
let pesoPeca = 50;
let nomePeca = "Disco de Freio";

// início teste peso de peças
if(pesoPeca < 100) {
    console.log("O peso mínimo da peça deve ser de 100g")
}else {
    console.log("Peso de peça correto")
}
// fim teste peso de peças

// início teste quantidade de peças
if (listaPecas.length < 10) {               
    console.log("É possível cadastrar mais peças");  
    } else {
        console.log("limite máximo de espaço na lista atingido");
    }
// fim teste quantidade de peças

// início teste nome da peça
    if (nomePeca.length > 3){
        console.log("Nome de peça está adequado");
    }else if(nomePeca.length == 0){
        console.log("Preencha este espaço com o nome da peça");
    }else {
        console.log("O nome deve ter mais de 3 caracteres")
    }
// fim teste nome da peça