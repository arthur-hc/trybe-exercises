# Escreva um programa que se conecte ao banco de dados library e liste os livros da coleção books para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido. # noqa: E501
from pymongo import MongoClient

client = MongoClient()
db = client.library
category = input("Categoria para acessar: ")
for book in db.books.find({"categories": category}, projection=["title"]):
    print(book["title"])
