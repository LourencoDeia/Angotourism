const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/swagger');
const indexRoutes = require('./routes/index.routes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/', indexRoutes);


// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Angotourism API disponível em http://localhost:${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
});