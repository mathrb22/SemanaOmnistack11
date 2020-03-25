const connection = require('../database/connection');

module.exports = {
    //acessando os dados da ONG logada:
    async index(request, response) {
        const ong_id = request.headers.authorization;

        //buscando os incidents 
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    },
}