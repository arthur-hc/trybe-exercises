# Exercício 1 Dado um array de números de tamanho n , escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio. # noqa: E501


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = "not a number"
    for number in numbers:
        if previous_number == number:
            return True
        previous_number = number

    return False

# Pela necessidade de ordenação, no pior, melhor ou médio caso, no mínimo exige a complexidade de ordenação, que no python é O(n log n). Em seguida, no pior dos casos, seria necessário passar pelo array todo uma só vez, sendo então 0(n), pois estaria sendo influenciado pelo tamanho do array. Então, a complexidade é O(n*log(n) + n) ou, simplificando, 0(n log n) # noqa: E501
