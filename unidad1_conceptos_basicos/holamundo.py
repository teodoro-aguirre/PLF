def hola(nombre):
    print("Hola " + nombre + ", como estas?")

hola("Angel")


def min(a, b, c):
    if a <= b and a <= c:
        return a;
    if b <= a and b <= c:
        return b;
    return c;

def max(a, b, c):
    if a >= b and a >= c:
        return a;
    if b >= a and b >= c:
        return b;
    return c;

def maxmin(a,b,c):
    print(min(a, b, c), max(a, b, c))
    
print(maxmin(10,3, 5))