# Busca saber em cada caso, se a criança receber os doces extras, passará a
# ter uma quantidade igual ou maior que a criança com mais doces


def doces_cristiano(candies, extra_candies):
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


if __name__ == "__main__":
    print(doces_cristiano([2, 3, 5, 1, 3], 3))
