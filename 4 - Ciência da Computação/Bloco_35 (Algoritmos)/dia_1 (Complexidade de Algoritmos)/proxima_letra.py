# Dada uma lista ordenada de letras do alfabeto, contendo somente letras minúsculas, e dado uma letra como alvo, procure o menor elemento na lista que é maior que o alvo. # noqa: E501

# Ex: letras = ["b", "d", "f", "j"]
# alvo = "c"
# a saída será: "d"


def proxima_letra_maior(letras, alvo):

    inicio_array = 0
    array_completo = len(letras)
    meio_array = 0

    while inicio_array < array_completo:
        meio_array = (array_completo + inicio_array) // 2

        if letras[meio_array] <= alvo:
            inicio_array = meio_array + 1
        else:
            array_completo = meio_array
    return letras[inicio_array % len(letras)]


if __name__ == "__main__":
    letras1 = ["c", "f", "j"]
    alvo1 = "a"
    print(f"A saída foi: {proxima_letra_maior(letras1, alvo1)}")
