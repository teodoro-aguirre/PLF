-- Primera funcion
funcion1 :: Float -> Float     
funcion1 1 = sin 1
funcion1 n = log n

--funcion que comprueba si n es mayor que m

funcion2 :: Integer -> Integer -> Bool 
funcion2 n m = n > m

-- Mayor de dos numeros
mayorNum :: Integer -> Integer -> Integer 
mayorNum n m = max n m

-- Mayor tres numeros
mayorNum2 :: Integer -> Integer -> Integer -> Integer 
mayorNum2 a b c = mayorNum a (mayorNum b c) 

-- Media tres numeros
mayorNum3 :: Float -> Float -> Float -> Float 
mayorNum3 a b c= (a+b+c) / 3 

-- Impar
impar :: Integer  -> Bool 
impar n = not (even n)

-- Funcion par sin utilizar even
par2 :: Integer  -> Bool
par2 n = (mod n 2) == 0

-- Funcion impar sin utilizar even
impar2 :: Integer  -> Bool 
impar2 n = not(par2 n) == True

-- Media de tres números
-- media :: Integer -> Integer  -> Float
media :: Fractional a => a -> a -> a -> a
media x y z = (x + y + z) / 3