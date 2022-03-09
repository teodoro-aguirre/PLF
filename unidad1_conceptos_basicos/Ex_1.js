// Una función que reciba una cadena de caracteres y devuelva
// la letra que mas se repite



// const contarLetra = (cadena, letra) => {
//     let cadenaAux = cadena
//     let longitudCad = cadenaAux.length
//     let veces = 0; // Total de veces

//     let posicion = cadenaAux.indexOf(letra)
//     let posicionFinal = cadenaAux.lastIndexOf(letra)
//     posicionFinal = longitudCad - posicionFinal // Posicion de la ultima letra

//     while( longitudCad >= posicionFinal ){
//         posicion = cadenaAux.indexOf(letra)
//         posicion++;
//         cadenaAux = cadenaAux.substring(posicion) // Modificamos el texto
//         longitudCad -= posicion;
//         veces++;
//     }

//     return veces;
// }

const contarLetra = (cadena, letra) => {
    let count = 0;
    for(let i = 0; i <= cadena.length; i++){
        if(cadena.charAt(i) == letra)
            count += 1
    }
    return count
}

// console.log(contarLetra2('holaa', 'a'))

const letraMasRepetida = (cadena) => {
    let letras = []
    let veces = []
    for(let i = 0; i < cadena.length; i++){
        let letra = cadena.charAt(i);
        // console.log( letra )
        if( !letras.includes(letra) ){
            veces.push(contarLetra(cadena, letra))
            
            letras.push(letra) 
        }
    }
    // console.log(letras.length)
    // Obtenemos el mayor del arreglo
    let mayor = 0;
    let posicion;
    for(let i = 0; i < veces.length; i++){
        if(veces[i] > mayor){
            mayor = veces[i]
            posicion = i
        }
    }

    console.log(`La letra que mas se repite es: ${ letras[posicion] } y se repite ${ veces[posicion] } veces` )
}

let mensaje = 'basbabsbdb'

// console.log(mensaje.charAt(0))
// console.log(contarLetra(mensaje, mensaje.charAt(0)))
letraMasRepetida(mensaje)