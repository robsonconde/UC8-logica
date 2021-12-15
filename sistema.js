let liAlunos = ["Marcel", "Franklin", "Rita", "Afrânio"];
let numeroDeAlunos = 10;
let contador = 0;

/*          --exemplo while--

while(contador <= numeroDeAlunos){

    if(contador == 0) {
        console.log("O número atual é zero")
    } else if(contador % 2 != 1) {
        console.log("O número " + contador + " é Par")
    } else {
        console.log(`o número ${contador} é Impar`)
    }
    contador++;
}
*/

//          --exemplo for-- 

for(let i = 0; i <= numeroDeAlunos; i++) {
    
    if(i == 0) {
        console.log("O número atual é zero")
    } else if(i % 2 != 1) {
        console.log("O número " + i + " é Par")
    } else {
        console.log(`o número ${i} é Impar`)
    }
}

/*          --exemplo lista--

for (let nome of liAlunos ) {
    console.log(`esta pessoa se chama ${nome}`)
}
*/