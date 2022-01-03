# Exercício 2: Escreva um programa que receba vários números naturais
# e calcule a soma desses valores. Caso algum valor da entrada seja inválido,
# por exemplo uma letra, uma mensagem deve ser exibida, na saída de erros, no
# seguinte formato: "Erro ao somar valores, {valor} é um valor inválido". Ao
# final, você deve imprimir a soma dos valores válidos.
values = input("Insert values ")
values = values.split(" ")
sum_result = 0
for value in values:
    if not (str.isdigit(value)):
        print(f"Erro ao somar valores, {value} é um valor inválido")
        break
    sum_result += int(value)

print(sum_result)
