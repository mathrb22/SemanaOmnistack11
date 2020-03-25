const knex = require('knex');
const configuration = require('../../knexfile');

//importando a conexão de desenvolvimento:
const connection = knex(configuration.development);

module.exports = connection;