const factorial = 10;
let i = 1;
let result = 1;

while(i <= factorial){
    result *= i;
    i++;
}

console.log(`El factorial de ${ factorial } es: ${ result }`);
