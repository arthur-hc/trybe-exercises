# INSERÇÃO DE UMA RASPAGEM NO MONGO
from pymongo import MongoClient

client = MongoClient()
db = client.catalogue
# book representa um dado obtido na raspagem
book = {
    "title": "TESTANDO PEROLA",
}
document_id = db.books.insert_one(book).inserted_id
print(document_id)
client.close()  # fecha a conexão com o banco de dados
