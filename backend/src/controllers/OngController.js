const generateUniqueId = require('../utils/generateUniqueId');

const connection = require('../database/connection');

//exportando um objeto: module.exports = {};
module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //aguardar a conexão de ongs (inserção) e em sequida selecione todos os campos e registros (*) da tabela 'ongs'
        return response.json(ongs);
    },

    async create(request, response) {
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = request.body // ou de forma estruturada:  const data = request.body;
        const id = generateUniqueId(); //criação de um texto aleatório de 4 bytes e conversão para uma string no formato Hexadecimal

        //inserção dos dados na tabela 'ongs':
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        //Como a execução do insert pode demorar um pouco, devemos definir a função anterior como ASSÍNCRONA (ASYNC), e na estrutura do comando do INSERT iniciar com AWAIT;
        //Assim, quando o Node chegar no bloco connection('ongs').insert({}), ele vai realizar um AWAIT, irá aguardar ele ser finalizado para então executar os próximos comandos;
        return response.json({
            id
        });
    }
};