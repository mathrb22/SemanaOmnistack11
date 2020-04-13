//Teste unitário
const generateUniqueId = require('./../../src/utils/generateUniqueId')

//Definindo categoria do teste:
describe('Generate Unique ID', () => {
    //Resultado esperado pela função:
    it('should generate an unique id', () => {
        //Espaço para os testes:
        const id = generateUniqueId();

        expect(id).toHaveLength(8);
    });
});
//Para executar os testes: npm test