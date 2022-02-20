# Metodo de iteração
def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n + 1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


# Metodo recursivo
def fibonacci2(n):
    if n < 2:
        return n
    else:
        return fibonacci2(n - 1) + fibonacci2(n - 2)


print(fibonacci2(5))
