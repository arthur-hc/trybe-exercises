class TV:
    def __init__(self, tamanho):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = tamanho
        self.__ligada = False

    def aumentar_volume(self):
        self.__volume += 1 if self.__volume < 99 else print("Máx")

    def diminuir_volume(self):
        self.__volume -= 1 if self.__volume > 1 else print("Mín")

    def modificar_canal(self, canal):
        if canal >= 1 <= 99:
            self.__canal = canal
        else:
            raise (ValueError())

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
