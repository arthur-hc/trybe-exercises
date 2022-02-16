# Dado uma coleção de números inteiros ordenados em ordem crescente, tem exatamente um intero que ocorre mais do que 25% das vezes. Analise a ordem de complexidade de tempo e espaço # noqa: E501


def more_than_twenty_five_percent(array):
    twenty_five_percent = len(array) // 4
    seventy_five_percent = len(array) - twenty_five_percent

    for index, element in enumerate(array[:seventy_five_percent]):
        if element == array[index + twenty_five_percent]:
            return element
    return -1


# Primeiro se obtém quanto é 25% e 75% do array.
# Em seguida, limita iteração até o valor que representa 75%, porque ao chegar no valor, verificará se o valor que representa os 100% é igual aos 75%, e assim, representa mais de 25% do array. Essa situação não será verificada, caso essa condição seja atendida antes # noqa: E501
