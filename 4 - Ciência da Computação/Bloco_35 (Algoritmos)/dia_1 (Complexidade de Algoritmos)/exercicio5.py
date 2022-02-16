# Exercício 5 Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de dez números gerados aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa? # noqa: E501

import random


def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average / n
        list_of_averages.append(average)

    return list_of_averages


# A complexidade de tempo seria 0(n), pois mesmo que o tamanho do array seja fixo, a necessidade de tempo p/ sua solução será influenciada pelo tamanho do n demandado. Já a complexidade de memória será 0(1) # noqa: E501
