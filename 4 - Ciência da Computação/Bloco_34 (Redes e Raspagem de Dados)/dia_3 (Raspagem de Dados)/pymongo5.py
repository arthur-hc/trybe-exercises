# O CLIENTE É UM GERENCIADOR DE CONTEXTO (with), PODENDO SER UTILIZADO E VITANDO PROBLEMAS COM O FECHAMENTO DE CONEXÃO COM O BANCO DE DADOS # noqa: E501
from pymongo import MongoClient


with MongoClient() as client:
    db = client.database
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
