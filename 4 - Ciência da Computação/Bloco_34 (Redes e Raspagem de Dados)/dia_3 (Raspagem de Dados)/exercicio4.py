# Exercício 4 Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro. # noqa: E501
import requests
from parsel import Selector

URL = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"
response = requests.get(URL)
selector = Selector(text=response.text)

# Obtem o titulo
title = selector.css("h1::text").get()

# Obtem o preco, utilizando a partir do index 2 e assim removendo os caracteres Â£ # noqa: E501
price = selector.css(".price_color ::text").get()[2:]

# GABARITO
# price = selector.css(".product_main > .price_color::text").re_first(r"\d*\.\d{2}") # noqa: E501


# Obtem a descricao pegando um item pelo id e utilizando o seu irmao
# Antes de exibir verifica, e caso haja, remove o ...more
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

# Obtem o endereco da image
image = selector.css(".thumbnail img::attr(src)").get()

# GABARITO
# image = URL + selector.css("#product_gallery img::attr(src)").get()
print(title, price, description, image, sep=",")
