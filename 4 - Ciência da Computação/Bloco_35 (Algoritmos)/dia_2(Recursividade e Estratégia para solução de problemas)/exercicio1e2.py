# Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n). # noqa: E501


def pair_counter(n):
    counter = 0
    while n > 0:
        n -= 1
        if n % 2 != 0:
            counter += 1
    return counter


print(pair_counter(10))


# Exercício 2: Transforme o algoritmo criado acima em recursivo.
def recursive_pair_counter(n):
    if n <= 0:
        return 0
    if n % 2 != 0:
        return recursive_pair_counter(n - 1)
    else:
        return recursive_pair_counter(n - 1) + 1


print(recursive_pair_counter(10))
