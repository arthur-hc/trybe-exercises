# Exercício 7
# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a
# Trybe! Em um determinado módulo, os estudantes precisam entregar dois
# trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o
# nome da pessoa fica registrado. Precisamos saber como está o andamento da
# entrega das listas. Para isso, você tem acesso aos nomes das pessoas da
# turma, bem como ao log de quem já entregou qual lista. A partir das listas
# abaixo, crie quatro funções que respondem às perguntas a seguir.

estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
lista1_entregues = ['a', 'd', 'g', 'c']
lista2_entregues = ['c', 'a', 'f']

conjunto_estudantes = set(estudantes)
# Quem ainda não entregou a lista1?
print(conjunto_estudantes.difference(lista1_entregues))

# Quem já entregou as duas listas?
conjunto_lista1 = set(lista1_entregues)
print(conjunto_lista1.intersection(lista2_entregues))

# Quem já entregou qualquer uma das duas listas?
qualquer_lista_entregue = conjunto_lista1.union(lista2_entregues)
print(qualquer_lista_entregue)

# Quem ainda não entregou nenhuma das listas?
print(conjunto_estudantes.difference(qualquer_lista_entregue))
