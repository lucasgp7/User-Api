const userModel = require('../models/userModel');

async function getUsers(req, res) {
    try {
        const users = await userModel.selectUsers();
        res.json(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
}

async function getUser(req, res) {
    const userId = req.params.id;
    try {
        const user = await userModel.selectUser(userId);
        if (user.length > 0) {
            res.json(user[0]);
        } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
}

async function deleteUser(req, res) {
    const userId = req.params.id;
    try {
        await userModel.deleteUser(userId);
        res.sendStatus(204);
    } catch (error) {
        console.error('Erro ao excluir usuário:', error);
        res.status(500).json({ error: 'Erro ao excluir usuário' });
    }
}

async function createUser(req, res) {
    try {
        console.log("Dados recebidos na rota POST:", req.body);
        await userModel.insertUser(req.body);
        res.sendStatus(201);
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
        res.status(500).json({ error: 'Erro ao inserir usuário' });
    }
}

async function updateUser(req, res) {
    const userId = req.params.id;
    try {
        const userExists = await userModel.selectUser(userId);
        if (userExists.length === 0) {
            res.status(404).json({ error: 'Usuário não encontrado' });
        } else {
            await userModel.updateUser(userId, req.body);
            res.sendStatus(200);
        }
    } catch (error) {
        console.error('Erro ao atualizar usuário:', error);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
}

module.exports = {
    getUsers,
    getUser,
    deleteUser,
    createUser,
    updateUser
};
