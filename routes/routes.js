const {Router} = require('express');
const indexController = require('../controllers/IndexController');

const routes = Router();

routes.get('/',indexController.index);

module.exports = routes;