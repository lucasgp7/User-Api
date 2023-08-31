const { Pool } = require('pg');

const pool = new Pool({
    connectionString: process.env.CONNECTION_STRING
});

async function selectUsers() {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM public.usuariocliente');
        return res.rows;
    } finally {
        client.release();
    }
}

async function selectUser(id) {
    const client = await pool.connect();
    try {
        const res = await client.query('SELECT * FROM public.usuariocliente WHERE ID=$1', [id]);
        return res.rows;
    } finally {
        client.release();
    }
}

async function deleteUser(id) {
    const client = await pool.connect();
    return await client.query('DELETE FROM public.usuariocliente WHERE id=$1;', [id]);
}

async function insertUser(user) {
    const client = await pool.connect();
    const sql = 'INSERT INTO public.usuariocliente(nome, cpf, usuario, senha, email) VALUES ($1, $2, $3, $4, $5);';
    const values = [user.nome, user.cpf, user.usuario, user.senha, user.email];
    return await client.query(sql, values);
}

async function updateUser(id, user) {
    const client = await pool.connect();
    const sql = 'UPDATE public.usuariocliente SET nome=$1, cpf=$2, usuario=$3, senha=$4, email=$5 WHERE id=$6';
    const values = [user.nome, user.cpf, user.usuario, user.senha, user.email, id];
    return await client.query(sql, values);
}

module.exports = {
    selectUsers,
    selectUser,
    insertUser,
    updateUser,
    deleteUser
};
