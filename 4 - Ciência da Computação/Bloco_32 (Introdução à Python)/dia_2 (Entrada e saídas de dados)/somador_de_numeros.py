meu_numero = 0
while meu_numero < 42:
    meu_numero += int(input("Digite seu número: "))
    # input será sempre string, é necessário a conversão
    print(f"Acumulado {meu_numero}")

print("A soma de seus números superou 42")
