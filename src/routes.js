const express = require('express');

const UserController = require('./app/controllers/UserController');

const routes = new express.Router();

routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);

module.exports = routes;
