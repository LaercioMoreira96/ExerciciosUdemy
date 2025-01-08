const nome = 'Laercio';
let i = 0
result = []
while (i < nome.length){
    result.unshift(nome[i])
    i++;    
}

strInvertida = result.join('').toLowerCase();

console.log(strInvertida)
