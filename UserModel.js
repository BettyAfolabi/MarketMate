const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'myapp'
});

const UserModel = {
    findByEmail: async (email) => {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', [email]);
            return rows[0];
        } finally {
            connection.release();
        }
    },
    create: async (email, password) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const connection = await pool.getConnection();
        try {
            await connection.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);
            return { email, password: hashedPassword };
        } finally {
            connection.release();
        }
    }
};

module.exports = UserModel;
