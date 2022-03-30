-- Clase 22 de Marzo del 2022

-- Fórmula general
formulaGral :: Float -> Float -> Float -> [Float]
formulaGral a b c = [(-b + sqrt (b * b - 4.0 * a * c)) / (2.0*a),
                    (-b - sqrt (b * b - 4.0 * a * c)) / (2.0*a)]

-- 

-- Formula general subexpresiones
formulaGral2 :: Float  -> Float  -> Float  -> [Float]
formulaGral2 a b c = [( -b + d ) / n,
                        (-b - d) / n]
                            where d = sqrt (b * b - 4.0 * a * c)
                                  n = 2.0 * a 

-- cuadradosLista regresa los cuadrados del numero n a 1
cuadradosListaD :: Integer  -> [Integer]
cuadradosListaD 0 = []
cuadradosListaD 1 = [1]
cuadradosListaD n = cuadradosListaD( n - 1) ++ [n*n]

-- Hecho por guardas
cuadradosListaD2 :: Integer  -> [Integer]
cuadradosListaD2 n | n <= 0 = []
                   | n > 0 = [n * n] ++ cuadradosListaD2(n - 1)

-- Hecho por guardas y otherwise
cuadradosListaD3 :: Integer  -> [Integer]
cuadradosListaD3 n | n <= 0 = []
                   | otherwise  = [n * n] ++ cuadradosListaD2(n - 1)


-- Factorial con guardas 
factorialG :: Integer -> Integer 
factorialG n | n == 0 = 1
             | otherwise = n * factorialG(n-1)

-- Fibonacci con guardas
fibonacciG :: Integer -> Integer 
fibonacciG n | n == 0 = 0
             | n == 1 = 1
             | otherwise = fibonacciG(n-2) + fibonacciG(n-1)


-- Funcion par sin utilizar even
par :: Integer  -> Bool
par n = (mod n 2) == 0


-- Recibe una lista si es par devuelve el factorial si es impar el fibonacci
-- [1, 2, 3, 4] -> [1, 2, 2, 24]
-- Ejercicio del examen en haskell
factFib ::  [Integer] -> [Integer]
factFib (c:r) | r == [] = [comprueba c]
                    | otherwise = [comprueba c] ++ factFib r

-- Comprueba si es par o no y ejecuta cierta función
comprueba :: Integer  -> Integer  
comprueba n | par n == True = factorialG n
            | otherwise = fibonacciG n

-- Defifinir la función factoriales tal que factoriales n es la lista de los factoriales desde 
-- el factorial de 0 hasta el factorial n, ejemplo factoriales 5 : regresa [1, 1, 2, 6, 24, 120]
factoriales :: Integer -> [Integer]
factoriales n | n == 0 = [1]
              | otherwise = factoriales (n-1) ++ [factorialG n] 

-- Función que regresa si el elemento pertenece o no a la lista, 
-- ejemplo pertenece 3 [2, 5, 9, 3]; devuelve true
pertenece :: Integer  -> [Integer] -> Bool 
pertenece n [] = False 
pertenece n (c:r) | n == c = True
                  | otherwise = pertenece n r

-- Función sucesión de Fibonacci
sucFib :: Integer -> [Integer]
sucFib n | n <= 0 = []
         | otherwise  = sucFib(n-1) ++ [fibonacciG n]

-- Función que suma los elementos de una lista (guardas)
sumaElementos :: [Integer] -> Integer  
sumaElementos [] = 0 
sumaElementos (c:r) = c + sumaElementos r

-- Función que regresa la posición de un elemento en una lista
posicionLista :: Integer -> [Integer] -> Integer 
posicionLista n [] = 0
posicionLista n (c:r) | n == c = 1
                      | c == [] = 0
                      | otherwise = 1 + (posicionLista n r) 
-- Tiene que regresar 0 sino se encuentra

-- Función que calcula el tamaño de una lista (Guardas)
      -- Por ejemplos, tam [5, 4, 6, 7, 8, 2, 3, 5] devuelve 8

-- Practica 1 -- Lista todos los ejercicios hasta hoy 23 