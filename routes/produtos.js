const express = require('express')
const routes = express.Router();
const controller = require('../controllers/ProdutoController');

routes.post('/create', controller.post);
routes.get('/list', controller.get);
routes.put('/update/:id', controller.put);
routes.delete('/del/:id', controller.delete);

module.exports = routes;

