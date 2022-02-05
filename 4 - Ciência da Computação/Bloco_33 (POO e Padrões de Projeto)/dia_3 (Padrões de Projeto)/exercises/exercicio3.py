# Exercício 3: Com o baralho tradicional pronto, implemente agora uma subclasse
# de Baralho chamada BaralhoInverso , que produz um iterador para fornecer as
# cartas na ordem inversa, ou seja, sem embaralhar, a primeira carta deve ser
# o <K de paus> em vez do <A de copas> , como acontece na implementação atual.

from collections.abc import Iterator


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class Baralho:
    naipes = "copas ouros espadas paus".split()
    valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

    def __init__(self):
        self._cartas = [
            Carta(valor, naipe)
            for naipe in self.naipes
            for valor in self.valores
        ]

    def __len__(self):
        return len(self._cartas)


class CartaInteratorInverso(Iterator):
    def __init__(self, cartas):
        self.cartas = cartas
        self.index = 0

    def __next__(self):
        try:
            current_value = self.cartas[self.index]
        except IndexError:
            raise StopIteration()
        else:
            self.index -= 1
            return current_value


cartas = CartaInteratorInverso(Baralho()._cartas)
for carta in cartas:
    print(carta)
