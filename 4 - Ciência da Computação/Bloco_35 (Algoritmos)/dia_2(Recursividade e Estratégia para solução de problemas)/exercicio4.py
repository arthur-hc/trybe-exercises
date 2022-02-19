# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros. # noqa: E501


def find_maximum_common_divisor(num1, num2):
    if num2 == 0:
        return num1
    return find_maximum_common_divisor(num2, num1 % num2)


print(f"MMC 10 e 5 -->  {find_maximum_common_divisor(5, 10)}")
