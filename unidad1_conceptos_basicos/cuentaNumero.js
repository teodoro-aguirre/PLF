// Funcion que reciba una lista y un número 
// y cuente el numero de veces que aparece el numero

// 1. Pedir valores lista, numero
// 2. Recorrer el arreglo con un ciclo
// 3. Comparar si la ubicacion actual coincide con el numero
// 4. Si es asi, incrementar en uno, en caso contrario continuar.
const cuentaNumeros = (lista, numero) => {
    let count = 0;
    for(let i = 0; i <= lista.length; i++){
        if(lista[i] == numero)
            count += 1
    }
    return count
}

const sumaMayorMenor = (lista) => {
    // Funcion para calcular la suma del numero maximo y minimo de una lista de numeros
    let mayor = 0;
    let menor = lista[0];
    for(let i = 0; i <= lista.length; i++){
        if(lista[i] > mayor)
            mayor = lista[i]
        if(lista[i] < menor)
            menor = lista[i]
    }

    return mayor + menor
}

const MayorMenorIgual = (lista) => {
    // Funcion para calcular la suma del numero maximo y minimo de una lista de numeros
    let mayor = 0;
    let menor = lista[0];
    for(let i = 0; i <= lista.length; i++){
        if(lista[i] > mayor)
            mayor = lista[i]
        if(lista[i] < menor)
            menor = lista[i]
    }
    if (mayor == menor)
        return 0
    return mayor + menor
}
const lista = [5, 1, 2, 3, 5, 8, 2, 3, 0, 1, 1]
const listaIgual = [2, 2, 2, 2, 2]
const numero = 5
console.log("El numero: " + 10 + " aparece: " + cuentaNumeros([1,2,3], 10) + " veces, la suma del mayor y menor es: " + sumaMayorMenor([1, 2, 3]))
console.log(MayorMenorIgual(listaIgual))
console.log(MayorMenorIgual(lista))