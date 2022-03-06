# Exercício 3 Dado um array de números inteiros que representam produtos em um
# e-commerce. Verifique quantos produtos formam boas combinações, considerando
# que uma boa combinação é quando um produto é igual ao outro e seu índice é
# maior que o anterior. Esta combinação pode ser utilizada para modificar os
# produtos de uma página. Por exemplo:

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def good_combinations_counter(products):
    counter = 0
    for product in products:
        counter += products.count(product) - 1
        products = products[1:]
    return counter


p1 = [1, 3, 1, 1, 2, 3]
p2 = [1, 1, 2, 3]
print(good_combinations_counter(p1))
