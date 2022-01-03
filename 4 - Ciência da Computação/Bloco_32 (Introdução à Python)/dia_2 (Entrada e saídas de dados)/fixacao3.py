# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas,
# escreva um programa que lê todas essas informações e filtre mantendo somente
# as pessoas que estão reprovadas, e escreva seus nomes em outro arquivo. A
# nota miníma para aprovação é 6.
file = open("alunos.txt", mode="r+")
todos_alunos = file.readlines()
for aluno in todos_alunos:
    nome = aluno.split(" ")[0]
    nota = aluno.split(" ")[1].rstrip("\n")
    if(int(nota) < 6):
        print(nome)
file.close()  # não podemos esquecer de fechar o arquivo
