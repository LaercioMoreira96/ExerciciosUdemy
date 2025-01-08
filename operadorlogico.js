function recebeNumero(num1, num2){
    if (num1 == num2){  
        return "Os dois numeros são iguais"
    } else if (num1 > 10 && num2 > 10){
        return "Ambos são maiores que 10";
    } else {
        return "Pelo menos um é maior que 10"
    }
}


console.log(recebeNumero(15, 15));  
console.log(recebeNumero(11, 20)); 
console.log(recebeNumero(4, 8));   