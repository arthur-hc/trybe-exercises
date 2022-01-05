# Exercício 5: Utilizando o arquivo pokemons.json , vamos escrever um programa
# que sorteie um pokemon aleatoriamente. O programa deve perguntar à pessoa
# usuária "Quem é esse pokemon?", até que ela o acerte. A cada erro, apresente
# um número de letras do nome daquele pokemon igual ao número de erros.
# Exemplo: o pokemon sorteado pelo programa é butterfree , a pessoa usuária
# chuta charizard , o programa deve exibir b . Em seguida, a pessoa chuta
# blastoise , o programa deve exibir bu e assim por diante até a pessoa
# acertar.
# 🦜 Você pode utilizar o método choice do modulo random para sortear
# aleatoriamente um pokemon. Ex: random.choice(pokemon)
# -> Saída: {"name": "Pikachu", }


import json
import random

pokemons = []
with open("pokemons.json", mode="r") as file:
    pokemons = json.load(file)["results"]

pokemon = random.choice(pokemons)["name"]

qt_leters_to_show = 0
while qt_leters_to_show <= len(pokemon):
    if qt_leters_to_show == len(pokemon):
        print(f"Sory, not this time. The correct answer is {pokemon}")
        break
    name_to_show = pokemon[:qt_leters_to_show]
    user_answer = name_to_show + input(f"Who is this pokemon? {name_to_show}")
    if user_answer == pokemon:
        print("Congratulations!")
        break
    else:
        print("Wrong answer, try again!")
        qt_leters_to_show += 1
