//IMPORTAÇÕES DE FUNCIONALIDADES DO EXPRESS:
const express = require('express'); //importando o módulo express para a variável express;
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //para entender os códigos de pacotes JSON, convertendo-os em objetos JavaScript
app.use(routes);

// ROTA / RECURSO

/**
 * MÉTODOS HTTP:
 * -> GET: buscar/listar um informação do back-end, quando o browser busca rotas e recursos
 * -> POST: criar uma informação no back-end
 * -> PUT: alterar uma informação no back-end
 * -> DELETE: deletar uma informação no back-end
 */

/**
 * TIPOS DE PARÂMETROS:
 * -> QUERY PARAMS: parâmetros nomeados enviados dentro da rota (URL) após o "?" : filtros, paginação
 *      - http://localhost:3333/users?name=Matheus
 *      - http://localhost:3333/users?page=2&name=Matheus&idade=25  (anexando parâmetros com o "&")
 * 
 * -> ROUTE PARAMS: parâmetros utilizados para identificar recursos, um único recurso
        - /users/:id'
        - http://localhost:3333/users/1

   -> REQUEST BODY: corpo da requisição, utilizado para criar ou alterar recursos. Sempre será enviado os dados ao back-end pelo método POST, por meio de pacotes JSON
 */ 

/** TIPOS DE BANCOS DE DADOS:
 *  -> SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server; (mais utilizado atualmente, melhor estruturado)
 *  -> NoSQL: MongoDB, CouchDB, etc. (menos estruturado)
 *  
 */


app.listen(3333) //porta para acessar a aplicação
//Cannot GET /  -> não foi criado nenhuma rota para a nossa aplicação
