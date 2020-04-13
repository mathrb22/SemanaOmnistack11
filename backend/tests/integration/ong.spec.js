const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

    //Antes de cada um dos testes
    beforeEach(async () => {
        await connection.migrate.rollBack(); //desfazendo as migrations dos testes anteriores (resetando o banco de dados)
        await connection.migrate.latest(); //executar as migrations
    });

    //Depois de todos os testes
    afterAll(async () => {
        await connection.destroy(); //desfaz a conexão do teste com o banco de dados;
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "AMC",
                email: "contato@amc.com",
                whatsapp: "32985681421",
                city: "Rio de Janeiro",
                uf: "RJ",
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});