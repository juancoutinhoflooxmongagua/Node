const express = require('express');
const app = express();

// Middleware em cadeia
app.use((req, res, next) => {
  console.log('Middleware 1');
  next();
});

app.use((req, res, next) => {
  console.log('Middleware 2');
  next();
});

// Rota raiz
app.get('/', (req, res) => {
  res.send('API iniciada');
});

// Rota com path específico usando .use()
app.use('/detalhes', (req, res) => {
  res.send('Conteúdo da rota /detalhes');
});

// Rota com múltiplos métodos
app.route('/item')
  .get((req, res) => res.send('Listando itens'))
  .post((req, res) => res.send('Novo item adicionado'))
  .put((req, res) => res.send('Item atualizado'));

// Modularizando com Router
const apiRoutes = express.Router();

apiRoutes.get('/clientes', (req, res) => {
  res.send('Clientes recuperados');
});

apiRoutes.post('/clientes', (req, res) => {
  res.send('Novo cliente cadastrado');
});

app.use('/v1', apiRoutes);

// Verificando que Router não é singleton
const r1 = express.Router();
const r2 = express.Router();
console.log('Routers são iguais?', r1 === r2); // false

// Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
