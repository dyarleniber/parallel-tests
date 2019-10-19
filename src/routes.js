const express = require('express');

const UserController = require('./app/controllers/UserController');
const TaskController = require('./app/controllers/TaskController');

const routes = new express.Router();

routes.post('/users', UserController.store);
routes.delete('/users', UserController.delete);
routes.post('/tasks', TaskController.store);
routes.delete('/tasks', TaskController.delete);

module.exports = routes;
