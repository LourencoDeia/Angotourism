const express = require('express');

const router = express.Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Verificar o estado da API
 *     description: Retorna uma mensagem de boas-vindas e o estado atual da API.
 *     tags:
 *       - Geral
 *     responses:
 *       200:
 *         description: API online.
 */
router.get('/', (req, res) => {
    res.json({
        message: 'Bem-vindo à API da Angotourism!',
        status: 'online'
    });
});

module.exports = router;