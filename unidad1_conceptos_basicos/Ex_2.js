// Implementar una funcion recursiva factFib(int a[]) que
// regrese un arreglo b[] conformado por:
// a. Si a[i] es par entonces b[i] = factorial(a[i])
// b. Si a[i] es impar entonces b[i] = fibonacci(a[i])

const factFib = (a) => {
    let b = [];
    for(let i = 0; i < a.length; i++){
        let valor = a[i]
        if( valor % 2 == 0){ // Es par
            b.push(factorialRecursivo(valor))
        } else { // No es par
            b.push(fibonacciRecursivo(valor))
        }
    }

    return b;
}

const fibonacciRecursivo = (n) => {
    if (n < 2) 
      return n;
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
};

const factorialRecursivo = (numero) => {
	// Sacar valor absoluto
	numero = Math.abs(numero);
	if (numero <= 1) return 1;
	return numero * factorialRecursivo(numero - 1);
};


// RECURSIVO
let b = []
function factFibRecursiva(a){
    
    if(a.length == 0)
        return b
    let valor = a[0]
    a.splice(0, 1)
    if( valor % 2 == 0){ // Es par
        b.push(factorialRecursivo(valor))
    } else { // No es par
        b.push(fibonacciRecursivo(valor))
    }
    
    return factFibRecursiva(a);
}

console.log(factFibRecursiva([1,2,3,4,5,6]))

// console.log(factFib([1,2,3,4,5,6]))