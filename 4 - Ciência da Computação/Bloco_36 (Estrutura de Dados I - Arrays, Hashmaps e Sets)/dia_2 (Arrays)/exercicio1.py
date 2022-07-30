# Exercício 1 Em um software monitor, que verifica a resiliência de outro
# software, precisamos saber qual o tempo máximo que um software permaneceu
# sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema
# e verificamos se está ok. Supondo um array que contenha os estados coletados
# por nosso software, calcule quanto tempo máximo que o servidor permaneceu
# sem instabilidades
# 1 - OK
# 0 - Instabilidades

# src: https://stackoverflow.com/questions/2664150/counting-longest-
# occurrence-of-repeated-sequence-in-python

import re


def stability_counter(reports):
    formated_list = "".join([str(report) for report in reports])
    return len(max(re.compile("(1+1)*").findall(formated_list)))


r1 = [0, 1, 1, 1, 0, 0, 1, 1]
r2 = [1, 1, 1, 1, 0, 0, 1, 1]

print(stability_counter(r1), stability_counter(r2))
