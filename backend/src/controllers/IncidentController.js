const connection = require('../database/connection');

module.exports = {
    //a listagem dos incidents deverá ter paginação, para não listar os incidents de uma só vez;
    async index(request, response) {
        //irá procurar o query param de nome PAGE. Se ele não existir, o padrão será 1 (1 página);
        //REALIZANDO A PAGINAÇÃO:
        const {
            page = 1
        } = request.query;

        //para retornar a contagem dos casos (quantidade de casos):
        const [count] = await connection('incidents').count();

        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //JOIN: RELACIONAR DADOS DE DUAS TABELAS; Além de listar os campos dos incidents, mostrar também os dados da respectiva ONG (se o id da ong for igual ao ong_id do INCIDENT)
            .limit(5) //limite de 5 registros listados
            .offset((page - 1) * 5) //pular 5 registros POR PÁGINA
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        //para enviarmos a contagem, utilizaremos o header da resposta da requisição
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);

    },

    async create(request, response) {
        const {
            title,
            description,
            value
        } = request.body;
        //geralmente a informação de qual usuário/empresa está logado na aplicação vem através do CABEÇALHO da requisição e não do CORPO da requisição;
        request.headers; //guarda informações do contexto da requisição;
        const ong_id = request.headers.authorization;

        //Retorno do id da ONG, e cadastro no banco de dados o incident (caso):
        const [id] = await connection('incidents')
            .insert({
                title,
                description,
                value,
                ong_id,
            })

        return response.json({
            id
        });
    },

    async delete(request, response) {
        const {
            id
        } = request.params; //id do incident que irá ou não ser deletado
        const ong_id = request.headers.authorization; //id da ong

        //para que a função DELETE seja executada, é necessário verificar se o incident realmente foi criado pela ONG que está querendo deletar;
        const incident = await connection('incidents')
            .where('id', id) //(where id == id)
            .select('ong_id') //apenas a coluna ong_id
            .first();

        //se o ong_id que fez a requisição DELETE, for diferente do ong_id que está logado na aplicação
        if (incident.ong_id != ong_id) {
            return response.status(401).json({
                error: 'Operation not permitted!'
            }) //código de status de não autorizado
        }

        await connection('incidents')
            .where('id', id)
            .delete();

        return response.status(204).send() //resposta de sucesso, porém sem conteúdo para retornar
    },
};