# Exercício 2 Em alguns lugares é comum lembrar um número do telefone
# associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa
# 69 5683. Claro que existem alguns problemas, uma vez que alguns números de
# telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão
# associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone
# correspondente baseado na tabela abaixo. Uma expressão é composta por letras
# maiúsculas (A-Z), hifens (-) e os números 1 e 0.

import re


def dictionare_numbers(character):
    if re.search("[ABC]", character, re.IGNORECASE):
        return "2"
    elif re.search("[DEF]", character, re.IGNORECASE):
        return "3"
    elif re.search("[GHI]", character, re.IGNORECASE):
        return "4"
    elif re.search("[JKL]", character, re.IGNORECASE):
        return "5"
    elif re.search("[MNO]", character, re.IGNORECASE):
        return "6"
    elif re.search("[PQRS]", character, re.IGNORECASE):
        return "7"
    elif re.search("[TUV]", character, re.IGNORECASE):
        return "8"
    elif re.search("[WXYZ]", character, re.IGNORECASE):
        return "9"
    else:
        return character


def get_phone_number_by_phrase(phrase):
    phone_number = ""
    for character in phrase:
        phone_number += dictionare_numbers(character)
    return phone_number
