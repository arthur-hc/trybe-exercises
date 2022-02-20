from operator import itemgetter

estudantes = [
  ('Maria Carolina',  'A', 15),
  ('Carlos Sá',  'B', 55),
  ('Felipe',  'B', 21),
  ('Cristiano',  'C', 18),
]


# Ordenará pelo item no index 2, ou idade
print(sorted(estudantes, key=itemgetter(2)))

# Traz o inverso
print(sorted(estudantes, key=itemgetter(2), reverse=True))
