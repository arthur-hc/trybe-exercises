# Exercício 1 - Blefe
# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a
# outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive.
# A pontuação final é calculada da seguinte forma:
# A nota de partida de cada pessoa é o maior número que a outra pessoa não
# escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.

# clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

# marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

entrada = {"Clara": [0, 1, 5, 9, 10], "Marco": [0, 2, 8, 9, 10]}

# saída: 'Marco'


def bluff_game(data_players):
    players = list(data_players.keys())
    player1 = data_players[players[0]]
    player2 = data_players[players[1]]

    p1_set = set(player1)
    p2_set = set(player2)
    p1_different_itens = list(p1_set.difference(p2_set))
    p2_different_itens = list(p2_set.difference(p1_set))
    p1_score = max(p1_different_itens) - min(p1_different_itens)
    p2_score = max(p2_different_itens) - min(p2_different_itens)
    if p1_score > p2_score:
        return f"Quem ganhou: {players[0]}"
    if p1_score == p2_score:
        return "Empate"
    else:
        return f"Quem ganhou: {players[1]}"


print(bluff_game(entrada))
