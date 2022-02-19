# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros. # noqa: E501


def biggest_number(list, biggest=0):
    if len(list) < 2:
        return list[0] if list[0] > biggest else biggest
    else:
        if list[0] > biggest:
            return biggest_number(list[1:], list[0])
        else:
            return biggest_number(list[1:], biggest)
