const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Microservicio de Canciones API',
            version: '1.0.0',
            description: 'API RESTful para gestionar un CRUD de canciones, documentada con Swagger.'
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 3000}`,
                description: 'Servidor de Desarrollo'
            }
        ]
    },
    // Apunta a los archivos que contienen las anotaciones de la API
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
    // Ruta para servir la UI de Swagger
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Mensaje en consola para saber dónde encontrar la documentación
    console.log(`[SWAGGER] Documentación disponible en http://localhost:${port}/api-docs`);
};

module.exports = swaggerDocs;
