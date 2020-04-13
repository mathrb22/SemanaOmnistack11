const connection = require('../database/connection');

//Única responsabilidade da rota de login: verificar se a ONG existe;
module.exports = {
    async create(request, response) {
        const {
            id
        } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) { //se a ONG não existir
            return response.status(400).json({
                error: 'No ONG found with this ID'
            }) //status 400 -> BAD REQUEST (Algo deu errado)
        }

        return response.json(ong);
    },
}