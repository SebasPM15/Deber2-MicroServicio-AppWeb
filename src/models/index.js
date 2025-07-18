const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Carga las variables de entorno del archivo .env
dotenv.config({ debug: true }); // Habilita depuración para verificar variables

// Crea una instancia de Sequelize con la configuración de la base de datos
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT || 'postgres',
        port: process.env.DB_PORT || 5432,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: false,
        retry: {
            match: [
                /SequelizeConnectionRefusedError/,
                /SequelizeHostNotFoundError/,
                /SequelizeHostNotReachableError/,
            ],
            max: 10, // Intentar reconectar 10 veces
            backoffBase: 1000, // Esperar 1 segundo entre intentos
            backoffExponent: 1.5, // Incremento exponencial del tiempo de espera
        },
        dialectOptions: {
            connectTimeout: 60000, // 60 segundos de tiempo de espera
        },
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa el modelo de Canción y lo inicializa con la instancia de Sequelize
db.songs = require('./song.model.js')(sequelize, Sequelize.DataTypes);

// Función para conectar a la base de datos con manejo de errores
async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log('[DATABASE] Conexión establecida.');
        await sequelize.sync();
        console.log('[DATABASE] Modelos sincronizados.');
    } catch (error) {
        console.error('[DATABASE] No se pudo conectar a la base de datos:', error);
        throw error;
    }
}

// Exporta la función de conexión para usarla en app.js
db.connectToDatabase = connectToDatabase;

module.exports = db;