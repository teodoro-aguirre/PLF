# n = 4
# fact = 1

# for i in range(1,n):
#     fact *= n
#     n -= 1
    
# print(fact)

def factorial(n):
    fact = 1
    if n == 0:
        return 1
    else:
        for i in range(1, n):
            fact *= n
            n -= 1
        return fact
    
print(factorial(6))

2+5