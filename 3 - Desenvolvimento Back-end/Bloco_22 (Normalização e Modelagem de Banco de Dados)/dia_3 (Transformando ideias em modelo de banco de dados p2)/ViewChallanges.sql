-- DESAFIOS SOBRE VIEW

-- 1- Crie uma view chamada film_with_categories utilizando as tabelas category , film_category e film do banco de dados sakila . Essa view deve exibir o título do filme, o id da categoria e o nome da categoria, conforme a imagem abaixo. Os resultados devem ser ordenados pelo título do filme.

USE sakila;
CREATE VIEW film_with_categories AS
SELECT film.title, category.category_id, category.name FROM film AS film
INNER JOIN film_category AS film_category
ON film_category.film_id = film.film_id
INNER JOIN category AS category
ON category.category_id = film_category.category_id
ORDER BY film.title;

-- 2- Crie uma view chamada film_info utilizando as tabelas actor , film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência.

CREATE VIEW film_info AS
SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title AS name 
FROM actor AS a
INNER JOIN film_actor AS fm
ON fm.actor_id = a.actor_id
INNER JOIN film AS f
ON f.film_id = fm.film_id
ORDER BY actor;

-- 3- Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila . Sua view deve exibir o address_id , o address , o district , o city_id e a city . Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência.
CREATE VIEW address_info AS
SELECT a.address_id, a.address, a.district, a.city_id, c.city
FROM address AS a
INNER JOIN city AS c
ON c.city_id = a.city_id
ORDER BY c.city;

-- 4- Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila . Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir.
CREATE VIEW movies_languages AS
SELECT f.title, l.language_id, l.name 
FROM film AS f
INNER JOIN language AS l
ON l.language_id = f.language_id;
