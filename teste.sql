CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    data_nascimento DATE,
    genero VARCHAR(10),
    cpf VARCHAR(11),
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(15),
    login VARCHAR(50) UNIQUE,
    senha VARCHAR(255)
);
