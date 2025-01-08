
function votarElegibilidade(idade){
    const teste = idade >= 18 ? "Pode votar" : "Não pode votar";
    return teste
}

console.log(votarElegibilidade(1))