# Metodo de iteração
def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


# Metodo recursivo
def reverse2(list):
    if len(list) < 2:
        return list
    else:
        return reverse2(list[1:]) + [list[0]]


# Metodo Cristiano
def reverse3(list):
    if len(list) < 2:
        return list
    else:
        return [list[-1]] + reverse2(list[: len(list) - 1])


my_list = [1, 2, 3, 4, 5]
print(reverse2(my_list))
print(reverse3(my_list))
