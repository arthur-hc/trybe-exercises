# abc Abstract Base Classes
# Iterator é a Interface
from collections.abc import Iterable, Iterator


class ProfileIterator(Iterator):
    def __init__(self, friends):
        self.__friends = friends
        self.__index = 0

    def __next__(self):
        try:
            current_value = self.__friends[self.__index]
            print("Chamou o Next por baixo dos panos")
        except IndexError:
            # Exceção lançanda quando não há mais elementos a serem iterados
            raise StopIteration()
        else:
            self.__index += 1
            return current_value


class SocialNetwork(Iterable):  # Quem vai solicitar a Interação
    def __init__(self, friends):
        self.friends = friends

    def __iter__(self):
        return ProfileIterator(self.friends)  # Solicita dados do Iterator


# Instagram não libera todos, libera 1 a 1
usuarios_que_nao_consigo_ver = [
    "Cristiano",
    "Carlos",
    "Eli",
    "Maria",
    "Rodrigo",
    "Tulio",
    "Bolsonaro",
]
network = SocialNetwork(usuarios_que_nao_consigo_ver)

# Este for, chama por baios dos panos o __next__ __iter__
for profile in network:
    print("Próximo Laço")
    print(profile)
