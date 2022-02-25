// 2.	Implementa la función Fibonacci de manera
// iterativa en el lenguaje de programación de tu elección.
const fibonacci = (n) => {
  let i = 0;
  let sucesion = [];

  while (i <= n) {
    if (i < 2) 
        sucesion.push(i);
    if (i != 0 && i != 1) 
        sucesion.push(sucesion[i - 1] + sucesion[i - 2]);
    console.log(`F(${i}) = ${sucesion[i]}`);
    i++;
  }
};

fibonacci(10);

// 3.	Implementa la función Fibonacci de manera recursiva en 
// el lenguaje de programación de tu elección.
const fibonacciRecursivo = (n) => {
  if (n < 2) 
    return n;
  if (n != 0 && n != 1)
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);
};

for (let i = 0; i <= 10; i++) 
    console.log(`F(${i}) = ${fibonacciRecursivo(i)}`);
