CREATE DATABASE IF NOT EXISTS normalization;

USE normalization;

CREATE TABLE setor(
setor_id INT PRIMARY KEY AUTO_INCREMENT,
setor VARCHAR(200) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE funcionario(
funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
sobrenome VARCHAR(200) NOT NULL,
email VARCHAR (255) NOT NULL,
telefone VARCHAR(15) NOT NULL,
data_cadastro DATETIME NOT NULL
)ENGINE=InnoDB;

CREATE TABLE funcionario_setor(
CONSTRAINT PRIMARY KEY (funcionario_id, setor_id),
funcionario_id INT NOT NULL,
setor_id INT NOT NULL,
FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
)ENGINE=InnoDB;

INSERT INTO setor(setor)
VALUES 
('Administração'),
('Operacional'),
('Estratégico'),
('Marketing'),
('Vendas');

INSERT INTO funcionario(funcionario_id, nome, sobrenome, email, telefone, data_cadastro)
VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25'),
(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00'),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35'),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

INSERT INTO funcionario_setor(funcionario_id, setor_id)
VALUES
(12, 1),
(12, 5),
(13, 2),
(14, 3),
(14, 5),
(15, 4);
