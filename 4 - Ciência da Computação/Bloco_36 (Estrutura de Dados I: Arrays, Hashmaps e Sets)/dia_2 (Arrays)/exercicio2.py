# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array
# numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto
# dividindo uma porção de cartas em 2 e depois mesclando as duas porções.
# Por exemplo:
# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]

# src: https://stackoverflow.com/questions/53639204/
# combining-two-lists-one-after-another

from itertools import chain


def shuffle_cards(cards):
    return list(
        chain.from_iterable(
            zip(cards[: len(cards) // 2], cards[len(cards) // 2:])
        )
    )


c1 = [2, 4, 6, 5, 1]
c2 = [1, 4, 4, 7, 6, 6]
print(shuffle_cards(c1))
print(shuffle_cards(c2))
