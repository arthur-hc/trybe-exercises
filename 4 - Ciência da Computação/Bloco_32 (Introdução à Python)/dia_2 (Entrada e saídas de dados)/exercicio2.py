# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a
# pessoa usuária tenha que adivinhar uma palavra que será mostrada com as
# letras embaralhadas. O programa terá uma lista de palavras e escolherá uma
# aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao
# final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou
# perdeu o jogo.

import random

words_list = [
    "sagaz",
    "negro",
    "âmago",
    "êxito",
    "mexer",
    "termo",
    "senso",
    "nobre",
    "algoz",
    "valha",
    "neném",
    "ainda",
]
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
