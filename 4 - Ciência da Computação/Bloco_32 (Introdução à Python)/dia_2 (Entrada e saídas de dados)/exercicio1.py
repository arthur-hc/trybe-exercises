# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na
# vertical em escada invertida. Exemplo:
name = input("Type a name ")

while name != "":
    print(name)
    name = name[:-1]
