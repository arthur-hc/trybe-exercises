# Exercício 5 Em um software gerenciador de servidores, precisamos verificar o
# número de servidores que se comunicam. Os servidores estão representados como
# um array bidimensional onde o valor 1 representa um computador e 0 a ausência
# do mesmo. Dois servidores se comunicam se eles estão na mesma linha ou mesma
# coluna.

# servidores =  [[1,0],[0,1]]
# resultado: 0
# Linhas e colunas são diferentes.

# servidores = [[1,0], [1,1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

# servidores = [[1, 0, 0],
#               [1, 0, 0],
#               [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna.


# def quantity_connections(server_architecture):
#     counter_connections = 0

#     for i_line, line in enumerate(server_architecture):
#         for i_column, column in enumerate(line):
#             if (
#                 i_column < len(line) - 1
#                 and column == 1
#                 and column == line[i_column + 1]
#                 or i_line < len(server_architecture) - 1
#                 and column == 1
#                 and server_architecture[i_line + 1][i_column] == column
#             ):
#                 counter_connections += 1
#     return counter_connections


servidores = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
# print(quantity_connections(servidores))


def count_servers(grid):

    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    answer = 0
    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                answer += 1

    return answer


print(count_servers(servidores))
