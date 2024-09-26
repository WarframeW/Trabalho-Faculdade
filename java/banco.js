const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// Configurando o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'seu_usuario',
    password: 'sua_senha',
    database: 'seu_banco'
});

// Endpoint de registro
app.post('/register', async (req, res) => {
    const { nome, idDtNascimento, genero, idDocumento, email, idTelefone, login, senha } = req.body;

    // Verifica se o e-mail já está em uso
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, results) => {
        if (results.length > 0) {
            return res.status(400).json({ message: 'E-mail já em uso' });
        }

        // Hash da senha
        const hashedPassword = await bcrypt.hash(senha, 10);

        // Armazena o usuário no banco de dados
        db.query('INSERT INTO usuarios (nome, data_nascimento, genero, cpf, email, telefone, login, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [nome, idDtNascimento, genero, idDocumento, email, idTelefone, login, hashedPassword],
            (err, results) => {
                if (err) {
                    return res.status(500).json({ message: 'Erro ao registrar usuário' });
                }
                res.status(201).json({ message: 'Usuário registrado com sucesso' });
            });
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

