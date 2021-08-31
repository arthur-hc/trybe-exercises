-- DESAFIOS ALTER TABLE

-- 1- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.locations CHANGE street_address address VARCHAR(40) NOT NULL;


-- 2- Escreva uma query SQL para alterar o nome da coluna region_name para region , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.regions CHANGE region_name region VARCHAR(25) NOT NULL;

-- 3- Escreva uma query SQL para alterar o nome da coluna country_name para country , mantendo o mesmo tipo e tamanho de dados.
ALTER TABLE hr.countries CHANGE country_name country VARCHAR(25) NOT NULL;