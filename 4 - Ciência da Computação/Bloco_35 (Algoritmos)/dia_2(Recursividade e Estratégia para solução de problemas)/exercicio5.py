# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo. # noqa: E501


def is_counsin_prime(n, divisor=2):
    if n <= 7:
        return n % 2 != 0
    else:
        if divisor == 7:
            return n % 7 != 0
        if n % divisor == 0:
            return False
        else:
            return is_counsin_prime(n, divisor + 1)


print(is_counsin_prime(29))
