const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');
const songRoutes = require('./routes/song.routes');
const swaggerDocs = require('../swagger');

// Carga las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.get('/', (req, res) => {
    res.json({ message: 'Bienvenido al microservicio de canciones. Visita /api-docs para ver la documentación de la API.' });
});
app.use('/api/songs', songRoutes);

// --- INICIO DE LA CORRECCIÓN ---
// Reemplazamos db.sequelize.sync() por una función asíncrona que solo
// verifica la conexión antes de iniciar el servidor.

const startServer = async () => {
    try {
        // authenticate() solo prueba la conexión, no modifica el esquema.
        await db.sequelize.authenticate();
        console.log('[DATABASE] La conexión ha sido establecida exitosamente.');

        app.listen(PORT, () => {
            console.log(`[SERVER] Corriendo en el puerto ${PORT}.`);
            // La documentación de Swagger se inicia después de que el servidor está escuchando.
            swaggerDocs(app, PORT);
        });

    } catch (error) {
        console.error('[DATABASE] No se pudo conectar a la base de datos:', error);
    }
};

// Llamamos a la función para iniciar todo el proceso.
startServer();
// --- FIN DE LA CORRECCIÓN ---