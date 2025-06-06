const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/criar-tabela', async (req, res) => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome TEXT
      )
    `);
    res.send('Tabela criada!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar tabela');
  }
});

app.post('/usuarios', async (req, res) => {
  console.log('Recebido corpo:', req.body);
  const { nome } = req.body;

  try {
    const result = await db.query('INSERT INTO usuarios (nome) VALUES ($1) RETURNING *', [nome]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);
    res.status(500).json({ error: 'Erro ao inserir usuário' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM usuarios');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
