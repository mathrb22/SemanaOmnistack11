const express = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController')

const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required().length(8),
    })
}),SessionController.create);


// Método GET - listagem das ONGS
routes.get('/ongs', OngController.index);

// Método POST - cadastro das ONGS
routes.post('/ongs', celebrate({
    //Validando o Body de uma requisição (inputs):
    [Segments.BODY]: Joi.object().keys({
        //validações dos campos da ong:
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),

    })
}) ,OngController.create);
//Sempre que a chave de um objeto for uma variável, utilizar colchetes []


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(), 
}),ProfileController.index)
//Toda requisição HTTP envia vários headers. Como não sabemos os outros headers, utilizar unknown() ao invés de keys(),
//para que as propriedades que não estão sendo validadas sejam descartadas;


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}),IncidentController.index);


routes.post('/incidents', celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    }), 
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required().length(8),
    }).unknown(),
}),IncidentController.create);


routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}) ,IncidentController.delete);
 
module.exports = routes; 