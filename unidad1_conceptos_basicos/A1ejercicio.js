const factorial = (n) => {
    let fact = 1;
    if(n == 0)
        return 1;
    else{
        for (let i = 1; i<= n; i++)
            fact *= i;
        return fact;
    }
}

console.log(`El factorial es: ${ factorial(10) }`);

// El factorial es: 3628800

