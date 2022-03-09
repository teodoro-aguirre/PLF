
def fibonacciRecursivo(n):
    if n < 2: 
      return n
    return fibonacciRecursivo(n - 1) + fibonacciRecursivo(n - 2);


def factorialRecursivo (numero):
    if (numero <= 1): 
        return 1
    return numero * factorialRecursivo(numero - 1);


listaAux = []
def factFib2(lista):
    global listaAux
    if len(lista) == 0:
        return listaAux
    else:
        valor = lista[0]
        lista.pop(0)
        if valor % 2 == 0:
            listaAux.append(factorialRecursivo(valor))
        else:
            listaAux.append(fibonacciRecursivo(valor))
        return factFib2(lista)

print(factFib2([1,2,3,4,5,6]))
# print(factFib2([1,2,3,4,5,6]))




# Correcion

# listaAux = []
# def factFib3(lista, primera = True):
#     global listaAux
#     if primera:
#         listaAux = []
#     if len(lista) == 0:
#         return listaAux
#     else:
#         valor = lista[0]
#         lista.pop(0)
#         if valor % 2 == 0:
#             listaAux.append(factorialRecursivo(valor))
#         else:
#             listaAux.append(fibonacciRecursivo(valor))
#         return factFib3(lista, False)
    
    

# # factfib3
# print(factFib3([1,2,3,4,5,6]))
# print(factFib3([1,2,3,4,5,6]))


# CODIGO MASTER

# listaAux = []
# def factFib2(lista):
#     global listaAux
#     if len(lista) == 0:
#         return listaAux
#     else:
#         valor = lista[0]
#         lista.pop(0)
#         if valor % 2 == 0:
#             listaAux.append(factorialRecursivo(valor))
#         else:
#             listaAux.append(fibonacciRecursivo(valor))
#         return factFib2(lista)

# print(factFib2([1,2,3,4,5,6]))

    
