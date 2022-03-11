# Exercício 6
# Escreva uma função que identifique o único número duplicado em uma lista.
# Retorne o número duplicado em O(n) .
# Exemplo:
# entrada = [1, 3, 2, 4, 5, 1]
# saída: 1

from collections import Counter


def get_duplicate(list):
    return [item for item, count in Counter(list).items() if count > 1][0]


entrada = [1, 3, 2, 4, 5, 1]
print(get_duplicate(entrada))
