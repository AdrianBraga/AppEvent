const express = require('express');

const routes = express.Router();

const home = require('../controllers/home');

routes.get('/', home.pageHome)

module.exports = routes;