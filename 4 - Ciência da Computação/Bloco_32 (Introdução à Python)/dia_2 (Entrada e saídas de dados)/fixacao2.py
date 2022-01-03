values = input("Insert values ")
values = values.split(" ")
sum_result = 0
for value in values:
    if not (str.isdigit(value)):
        print(f"Erro ao somar valores, {value} é um valor inválido")
        break
    sum_result += int(value)

print(sum_result)
