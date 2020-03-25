const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController')

const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', SessionController.create);

// Método GET - listagem das ONGS
routes.get('/ongs', OngController.index);
// Método POST - cadastro das ONGS
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
 
module.exports = routes; 