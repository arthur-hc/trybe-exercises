# Exercício 4 Dado dois arrays de números inteiros que representam instantes
# de entrada e saídas em uma biblioteca e um número que represente um instante
# a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca
# naquele instante. Considere que todo estudante que entrou, saiu da biblioteca

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.


def students_library_quantity_per_period(entraces, exits, period):
    counter = 0
    for i, entrace in enumerate(entraces):
        if entrace <= period <= exits[i]:
            counter += 1
    return counter


entrances = [1, 2, 3, 3, 4]
exits = [3, 5, 7, 3, 5]
period = 4

print(students_library_quantity_per_period(entrances, exits, period))
