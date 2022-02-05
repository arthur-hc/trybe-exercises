from abc import ABC, abstractmethod


class Navigator:
    def __init__(self, navigation_strategy):
        self.__navigation_strategy = navigation_strategy

    def build_route(self, departure, arrival):
        self.__navigation_strategy.build_route(departure, arrival)


class NavigationStrategy(ABC):
    @classmethod
    @abstractmethod
    def build_route(self):
        raise NotImplementedError


class WalkStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota a pé sainde de {departure} para {arrival}")


class BikeStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de bicicleta sainde de {departure} para {arrival}")


class BusStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de ônibus sainde de {departure} para {arrival}")


class CarStrategy(NavigationStrategy):
    @classmethod
    def build_route(cls, departure, arrival):
        print(f"Rota de carro sainde de {departure} para {arrival}")


Navigator(WalkStrategy).build_route("Centro", "Pampulha")
Navigator(BikeStrategy).build_route("Centro", "Pampulha")
Navigator(BusStrategy).build_route("Centro", "Pampulha")
Navigator(CarStrategy).build_route("Centro", "Pampulha")

# O Ponto relevante aqui, é a utilização da classe p/ gerenciar a rota de
# navegação de qualquer pessoa, idependentemente da forma (caminhando,
# bicicleta, ônibus, carro), através de uma classe abstrata
