# Exercício 3: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de parâmetro e deve somar todos os números antecessores a ele. # noqa: E501


def sumRecursive(n):
    if n <= 0:
        return 0
    return sumRecursive(n - 1) + n


print(sumRecursive(4))
