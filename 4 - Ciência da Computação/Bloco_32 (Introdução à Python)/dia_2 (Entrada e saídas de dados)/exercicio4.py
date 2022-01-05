# Exercício 4: Dado o seguinte arquivo no formato JSON , leia seu conteúdo e
# calcule a porcentagem de livros em cada categoria, em relação ao número total
# de livros. O resultado deve ser escrito em um arquivo no formato CSV como o
# exemplo abaixo.
# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878
import json
import csv

books = []
categories = set()
with open("books.json") as file:
    books = json.load(file)
    for book in books["books"]:
        for category in book["categories"]:
            categories.add(category)

average_by_category = {category: 0.0 for category in categories}

for book in books["books"]:
    for category in book["categories"]:
        average_by_category[category] += 1 / len(books["books"])

# print(average_by_category["java"])
for category in average_by_category:
    print({category: str(round(average_by_category[category] * 100, 2)) + "%"})

with open("average_by_category", "w") as file:
    writer = csv.writer(file)
    writer.writerow(["category", "percentage"])
    for category in average_by_category.items():
        writer.writerow(category)
