def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)


def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        return n * factorial_recursive(
            n - 1
        )  # chamada de si mesma com um novo valor


factorial_recursive(5)
