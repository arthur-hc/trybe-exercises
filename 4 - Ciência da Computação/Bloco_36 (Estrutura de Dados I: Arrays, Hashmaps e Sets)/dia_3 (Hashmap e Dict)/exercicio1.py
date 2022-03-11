# Exercício 1 - Facebook
# Você receberá uma lista de palavras e uma string . Escreva uma função que
# decida quais palavras podem ser formadas com os caracteres da string (cada
# caractere só pode ser utilizado uma vez). Retorne à soma do comprimento das
# palavras escolhidas.
from collections import Counter


def possible_words(words, chars):
    chars_dict = Counter(chars)
    possible_words = []
    for word in words:
        word_dict = Counter(word)
        letters = word_dict.keys()
        its_possible = True
        for letter in letters:
            if (
                letter not in chars_dict
                or word_dict[letter] > chars_dict[letter]
            ):
                its_possible = False
                break
        if its_possible:
            possible_words.append(word)
    print(len("".join(possible_words)))


words = ["cat", "bt", "hat", "tree"]
chars = "atach"
possible_words(words, chars)
