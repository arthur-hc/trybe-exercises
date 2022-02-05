# Dado o código abaixo de um baralho e suas cartas, você deve transformá-lo em
# um iterador sequencial, que fornece as cartas em sua ordem tradicional,
# começando de <A de copas> até <K de paus> .


# from collections.abc import Iterator


# class Carta:
#     def __init__(self, valor, naipe):
#         self.valor = valor
#         self.naipe = naipe

#     def __repr__(self):
#         return "<%s de %s>" % (self.valor, self.naipe)


# class Baralho:
#     naipes = "copas ouros espadas paus".split()
#     valores = "A 2 3 4 5 6 7 8 9 10 J Q K".split()

#     def __init__(self):
#         self._cartas = [
#             Carta(valor, naipe)
#             for naipe in self.naipes
#             for valor in self.valores
#         ]

#     def __len__(self):
#         return len(self._cartas)

# # SOLUÇÃO COM ITER DIRETO E WHILE
# # itBaralho = iter(Baralho()._cartas)
# # while itBaralho:
# #     try:
# #         print(next(itBaralho))
# #     except StopIteration:
# #         print("Fim")
# #         break


# # SOLUÇÃO COM CLASSE DE ITERATOR
# class CartaInterator(Iterator):
#     def __init__(self, cartas):
#         self.cartas = cartas
#         self.index = 0

#     def __next__(self):
#         try:
#             current_value = self.cartas[self.index]
#         except IndexError:
#             raise StopIteration()
#         else:
#             self.index += 1
#             return current_value


# cartas = CartaInterator(Baralho()._cartas)

# for carta in cartas:
#     print(carta)


# GABARITO
from collections.abc import Iterator, Iterable


class Carta:
    def __init__(self, valor, naipe):
        self.valor = valor
        self.naipe = naipe

    def __repr__(self):
        return "<%s de %s>" % (self.valor, self.naipe)


class IteradorDoBaralho(Iterator):
    def __init__(self, cartas):
        self._cartas = cartas
        self._pos = 0

    def __next__(self):
        try:
            carta = self._cartas[self._pos]
        except IndexError:
            raise StopIteration()
        else:
            self._pos += 1
            return carta


class Baralho(Iterable):
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

    def __iter__(self):
        return IteradorDoBaralho(self._cartas)


cartas = Baralho()

for carta in cartas:
    print(carta)
