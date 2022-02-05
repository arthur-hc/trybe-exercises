# Abaixo temos parte da implementação de um jogo do mundo de Star Wars.
# Porém esse código está com um erro. Encontre-o e corrija-o, sem alterar o
# código das classes de personagens ( Soldier e Jedi ).


class Soldier:
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi:
    def __init__(self, level):
        self.level = level

    def attackWithSaber(self):
        return self.level * 100


# Adaptador criado, permitindo utilizar o comando attack c/ jedi
# e não attackWithSaber, que seria o formato original
class JediAdapter:
    def __init__(self, originalJedi):
        self.jedi = originalJedi

    def attack(self):
        return self.jedi.attackWithSaber()


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")


StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(JediAdapter(Jedi(20))).fight_enemy()
