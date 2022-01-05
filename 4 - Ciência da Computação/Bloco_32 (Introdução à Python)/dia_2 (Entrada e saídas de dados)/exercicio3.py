# Exercício 3: Modifique o exercício anterior para que as palavras sejam
# lidas de um arquivo. Considere que o arquivo terá cada palavra em uma linha.

import random

import json

words_list = []

with open("wordslist.json", mode="r") as file:
    words_list = json.load(file)["words"]


word = random.choice(words_list)

shuffle_word = "".join(
    random.sample(word, len(word))
)

attempts = 0
while attempts <= 3:
    if attempts == 3:
        print(f'Tentativas excedidas. Resposta: {word}')
        break
    user_answer = input(f'"{shuffle_word}". Qual é a palavra embaralhada? ')
    if word != user_answer:
        print("Resposta errada")
        attempts += 1
    else:
        print("Parabéns, você acertou!")
        break
