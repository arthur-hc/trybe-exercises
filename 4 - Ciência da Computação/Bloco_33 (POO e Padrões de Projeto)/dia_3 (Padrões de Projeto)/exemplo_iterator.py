carros = ["fusca", "gol", "brasilia", "ferrari", "variant"]

itCarros = iter(carros)

while itCarros:
    try:
        print(next(itCarros))
    except StopIteration:
        print("acabou a bagaceira toda")
        break
