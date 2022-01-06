# Exercício 1: Escreva um programa que retorne uma lista com os valores
# numéricos de 1 a N, mas com as seguintes exceções :
# Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
# Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
# Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do
# número';
# Ex: 3 -> [1, 2, "Fizz"] .


def get_num_or_fizzbuzz(numbers):
    elements_to_return = []
    for element in numbers:
        if element % 15 == 0:
            elements_to_return.append("FizzBuzz")
        elif element % 5 == 0:
            elements_to_return.append("Buzz")
        elif element % 3 == 0:
            elements_to_return.append("Fizz")
        else:
            elements_to_return.append(element)
    return elements_to_return
