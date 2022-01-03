characters_file = open("meus-personagens-favoritos.txt", mode="w")

characters_file.write("Tio Patinhas\n")
characters_file.write("Neo\n")
characters_file.write("Homem Aranha\n")

print("Batman", file=characters_file)

more_characters = ["Sonho\n", "Ash Ketchum\n"]

characters_file.writelines(more_characters)

characters_file.close()

# OUTROS EXEMPLOS
# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo

# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(
        line
    )  # não esqueça que a quebra de linha também é um caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo


# Modo binário
# escrita
file = open("arquivo.dat", mode="wb")
file.write(
    b"C\xc3\xa1ssio 30"
)  # o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo
