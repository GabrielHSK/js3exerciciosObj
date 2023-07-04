// Implemente a função 'dobrarNumeros' que recebe um array de números
// e retorna um novo array com cada número dobrado.
function dobrarNumeros(numeros) {
    // Sua implementação aqui
    const dobraNumeros = numeros.map((numeros) => numeros * 2);

    return dobraNumeros;
}

// Implemente a função 'somarValores' que recebe um array de números
// e retorna a soma de todos os valores.
function somarValores(numeros) {
    // Sua implementação aqui
    return numeros.reduce((acumulador, atual) => acumulador + atual, 0); 
}

// Implemente a função 'filtrarPares' que recebe um array de números
// e retorna um novo array contendo apenas os números pares.
function filtrarPares(numeros) {
    // Sua implementação aqui
    const numsPares = numeros.filter((numeros) => numeros % 2 === 0);
    console.log(numsPares); 

    return numsPares;    
}