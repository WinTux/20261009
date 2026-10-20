const { Pool } = require('pg');
const http = require('http');

const pool = new Pool({
  user: 'process.env.DB_USER',
  host: 'process.env.DB_HOST',
  database: 'process.env.DB_NAME',
  password: 'process.env.DB_PASSWORD',
  port: 'process.env.DB_PORT', // 5432
});

const server = http.createServer(async (req, res) => {
    try {
        const resultado = await pool.query('SELECT NOW() AS ahora');
        res.end(`200 OK - Conexión a PostgreSQL exitosa. La hora actual es: ${resultado.rows[0].ahora}`);
    }catch (error) {
        res.statusCode = 500;
        res.end(`500 Internal Server Error - Error al conectar a PostgreSQL: ${error.message}`);
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor API escuchando en el puerto ${PORT}`);
});