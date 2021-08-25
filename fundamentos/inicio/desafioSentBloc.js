/**
 * O desafio consiste em exibir os números
 * pares e impares separadamente 
 */
const pares = [];
const impares = [];

for(var i = 0; i <= 10; i++){
    if(i % 2 != 0){
        pares.push(i);
    } else {
        impares.push(i);
    }
}

for(var i = 0; i <= pares.length; i++){
    console.log(pares[i]);
}

for(var i = 0; i <= impares.length; i++){
    console.log(impares[i]);
}



