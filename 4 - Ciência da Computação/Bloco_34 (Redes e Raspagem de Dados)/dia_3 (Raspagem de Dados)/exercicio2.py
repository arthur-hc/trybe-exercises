# Exercício 2 Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados. # noqa: E501
import requests

response = requests.get("https://api.github.com/users")
response = response.json()
for user in response:
    print(user["login"], user["url"])
