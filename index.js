require("dotenv").config();

const express = require('express');
const app = express();

const userController = require('./controller/userController');

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

// Rotas relacionadas aos usuários
app.get('/public/usuariocliente', userController.getUsers);
app.get('/public/usuariocliente/:id', userController.getUser);
app.delete('/public/usuariocliente/:id', userController.deleteUser);
app.post('/public/usuariocliente', userController.createUser);
app.patch('/public/usuariocliente/:id', userController.updateUser);

app.listen(port, () => {
    console.log(`API funcionando na porta ${port}`);
});
