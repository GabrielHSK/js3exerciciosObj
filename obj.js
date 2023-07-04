// Calcula o perímetro e a área de um retângulo
function calcularRetangulo(retangulo) {
    // Sua implementação aqui
    const objRetangulo = {    

    perimetro:
    2 * (retangulo.largura + retangulo.altura), 

    area:
    retangulo.largura * retangulo.altura
    }

    return objRetangulo;
}

// Verifica se uma pessoa é maior de idade
function ehAdulto(pessoa) {
    // Sua implementação aqui
    if (pessoa.idade  >= 18) {
        return true;
    } else {
        return false;
    }

    let qualquerPessoa = {
        nome: 'Ana',
        idade: 20,
        cidade: "Londrina",
    }

    console.log(ehAdulto(qualquerPessoa));    

}

// Concatena os valores de um objeto em uma string
function concatenaValores(obj) {
    // Sua implementação aqui
    return obj.nome + " " + obj.idade + " " + obj.cidade;
}
