//Escreva uma função que recebe um numero e retorne o seguinte:
// Numero divisivel por 3 = Fizz
// Divisivel por 5  = Buzz
// Divisivel por 3 e 5 = FizzBuzz
// Não divisivel por 3 e 5 = retorna o próprio numero
// Checar se realmente é o numero = retorna o proprio numero
// Use a função com numeros de 0 a 100


function fizzBuzz(numero){
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;
    
}

for(let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}
