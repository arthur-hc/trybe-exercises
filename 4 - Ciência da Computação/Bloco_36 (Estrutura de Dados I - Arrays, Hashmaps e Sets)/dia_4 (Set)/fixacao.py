# Exercício 1: Inicializando a classe e adicionando elementos
# Crie uma classe chamada Conjunto ;
# Escreva um construtor que defina uma lista do tamanho necessário. Inicialize
#  todos os valores com False , uma vez que ainda não temos valores adicionados
# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;
# Na main (dentro de: if __name__ == "__main__": ), instancie um objeto do tipo
# Conjunto e adicione os valores.

# Exercício 2: Caso tenhamos que imprimir na tela o nosso objeto, o comando
# print(conjunto)
# não irá funcionar. O que será impresso é o endereço de memória onde o objeto
# está guardado, e não é isso que queremos. Para que o comando print funcione,
# precisamos que a nossa classe tenha um método chamado __str__ e é o que
# faremos agora:

# Exercício 3:Caso queiramos saber se um elemento faz parte ou não do conjunto
# usando o operador in precisamos que a nossa classe tenha um método chamado
# __contains__ e é o que faremos agora:

# Exercício 4: Todos os elementos que estão em A OU em B
# Crie um método com a assinatura abaixo, que recebe como parâmetro outro
# objeto da classe Conjunto :


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string

    def __contains__(self, item):
        return self.set[item]

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj.add(item)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

    conj = Conjunto()
    for i in [1, 2, 3]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)

    conj1 = Conjunto()
    for i in range(1, 11):
        conj1.add(i)

    conj2 = Conjunto()
    for i in range(10, 21):
        conj2.add(i)

    conj3 = conj1.union(conj2)
    print(conj3)

    conj3 = conj1.intersection(conj2)
    print(conj3)

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj3.issubset(conj4))
