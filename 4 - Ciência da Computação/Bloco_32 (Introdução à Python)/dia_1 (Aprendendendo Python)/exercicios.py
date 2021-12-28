# Exercício 1: Crie uma função que receba dois números e retorne o maior deles
def biggest_num(n1, n2):
    return max(n1, n2)


print(biggest_num(12, 15))


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def average(list):
    return sum(list) / len(list)


print(average([15, 45]))


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
def print_star_square(side):
    side = int(side)
    i = 0

    while i < side:
        j = 0
        while j < side:
            j = j + 1
            print("*", end="  ")
        i = i + 1
        print("")


print_star_square(5)


# Exercício 4: Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres. Por
# exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda" .
def get_longest_name(list):
    return max(list, key=len)


print(
    get_longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
)


# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3
# metros quadrados e que a tinta é vendida em latas de 18 litros, que custam
# R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a
# quantidade de latas de tinta a serem compradas e o preço total a partir do
# tamanho de uma parede(em m²).
def quantity_to_buy(wall_size):
    import math

    liters = wall_size / 3
    paint_cans = int(math.ceil((liters) / 18))

    return (paint_cans, paint_cans * 80)


print(quantity_to_buy(54))


# Exercício 6: Crie uma função que receba os três lado de um triângulo e
# informe qual o tipo de triângulo formado ou "não é triangulo", caso não
# seja possível formar um triângulo.
def is_triangle(s1, s2, s3):
    if sum([s1, s2, s3]) != 180:
        return "This is not triangle"
    elif s1 == s2 and s2 == s3:
        return "Equilateral triangle"
    elif s1 == s2 or s2 == s3 or s1 == s3:
        return "Isosceles Triangle"
    else:
        return "Escaleno Triangle"


print(is_triangle(80, 50, 50))


# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo,
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .
def smallest_num(list):
    return min(list)


print(smallest_num([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1 ,
# imprima na tela um triângulo retângulo com n asteriscos de base. Por exemplo,
# para n = 5 o triângulo terá 5 asteriscos na base:
def print_half_three(n):
    # outer loop to handle number of rows
    # n in this case
    for i in range(0, n):

        # inner loop to handle number of columns
        # values changing acc. to outer loop
        for j in range(0, i + 1):

            # printing stars
            print("* ", end="")

        # ending line after each row
        print("\r")


print_half_three(5)


# Exercício 3: Crie uma função que receba um número inteiro N e retorne
# o somatório de todos os números de 1 até N . Por exemplo, para N = 5,
# o valor esperado será 15 .
def one_to_n(n):
    return sum(range(n + 1))


print(one_to_n(5))


# Exercício 4: Um posto está vendendo combustíveis com a seguinte tabela
# de descontos:
# Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.
def price_to_pay(litters, type):
    pa = 1.9
    pg = 2.5
    total = 0
    if litters <= 20:
        if type == "A":
            total = pa * 0.97 * litters
        else:
            total = pg * 0.96 * litters
    else:
        if type == "A":
            total = pa * 0.95 * litters
        else:
            total = pg * 0.94 * litters
    return total


print(price_to_pay(20, "A"))
