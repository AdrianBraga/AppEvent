const express = require('express');

const routes = express.Router();

const index = require('../controllers');

routes.get('/', index.pageHome)
routes.get('/listEvents', index.listEvents)

module.exports = routes;