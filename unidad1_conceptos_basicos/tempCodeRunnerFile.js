const contarLetra2 = (cadena, letra) => {
    let count = 0;
    for(let i = 0; i <= cadena.length; i++){
        if(cadena.charAt(i) == letra)
            count += 1
    }
    return count
}

console.log(contarLetra2('holaa', 'a'))