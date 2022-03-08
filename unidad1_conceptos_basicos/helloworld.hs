-- funcion factorial
factorial :: Integer -> Integer 
factorial 0 = 1
factorial n = n * factorial(n-1)

-- funcion fibonacci
fibonacci :: Integer -> Integer 
fibonacci 0 = 0
fibonacci 1 = 1
fibonacci n = fibonacci(n-2) + fibonacci(n-1)

suma :: Integer -> Integer -> Integer
suma x y = x + y

factorial2 :: Integer -> Integer 
factorial2 0 = 1
factorial2 n = product[1..n]

sumaLista :: [Integer] -> Integer 
sumaLista [] = 0
sumaLista (x:y) = x + sumaLista y

