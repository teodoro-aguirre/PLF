
-- Funcion par sin utilizar even
par2 :: Integer  -> Bool
par2 n = (mod n 2) == 0

-- Funcion impar sin utilizar even
impar2 :: Integer  -> Bool 
impar2 n = not(par2 n) == True