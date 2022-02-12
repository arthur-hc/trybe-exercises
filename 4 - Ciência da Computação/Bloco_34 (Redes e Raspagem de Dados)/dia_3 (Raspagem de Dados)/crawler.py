# # PRIMEIRO COD
# import requests

# # À partir da décima requisição somos bloqueados de acessar o recurso
# # Código de status 429: Too Many Requests
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response.status_code)

# # SEGUNDO COD
# import requests
# import time


# # Coloca uma pausa de 6 segundos a cada requisição
# # Obs: este site de exemplo tem um rate limit de 10 requisições por minuto
# for _ in range(15):
#     response = requests.get("https://www.cloudflare.com/rate-limit-test/")
#     print(response)
#     time.sleep(6)

# # TERCEIRO COD
# import requests


# try:
#     # recurso demora muito a responder
#     response = requests.get("http://httpbin.org/delay/10", timeout=2)
# except requests.ReadTimeout:
#     # vamos fazer uma nova requisição
#     response = requests.get("http://httpbin.org/delay/1", timeout=2)
# finally:
#     print(response.status_code)

# QUARTO COD
# PEGARÁ TODAS A PRIMEIRA IMAGEN COM A CLASSE THUMBNAIL. P/ PEGAR TODAS, RETIRE O [0] # noqa: E501
from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
# Pegará o primeiro
print(selector.css("img.thumbnail").getall()[0])
# Pegará o desejado no index
print(selector.css("img.thumbnail").getall()[0])
# Pegará o todos
print(selector.css("img.thumbnail").getall())
# Pegará um a um e imprimirá
for thumbnail in selector.css("img.thumbnail").getall():
    print(thumbnail)
# Pegará a tag a contida na div com a classe image_container
print(selector.css("div.image_container a").get())
# Pegará o conteúdo da tag a
thumb_url = selector.css("div.image_container a::attr(href)").get()
# Acessará o link
thumbnail_request = requests.get("http://books.toscrape.com/" + thumb_url)
# Configura o seletor
thumbnail_selector = Selector(text=thumbnail_request.text)
# Utiliza o seletor para capturar o h1 contido na div com a class product_main
book_title = thumbnail_selector.css("div.product_main h1")
# Mostra o titulo
print(book_title.get())

# reconfigura o seletor
selector = Selector(text=response.text)
thumbnail_url_selector = "div.image_container a::attr(href)"

# Acessará todas as urls e a cada uma obterá o títlo e imprimirá
for url in selector.css(thumbnail_url_selector).getall():
    thumbnail_request = requests.get("http://books.toscrape.com/" + url)
    thumbnail_selector = Selector(text=thumbnail_request.text)
    book_title = thumbnail_selector.css("div.product_main h1")
    print(book_title.get())
