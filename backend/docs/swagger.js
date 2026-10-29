const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Angotourism API',
            version: '1.0.0',
            description:
                'API para a plataforma Angotourism, dedicada à promoção do turismo em Angola.'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local de desenvolvimento'
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;