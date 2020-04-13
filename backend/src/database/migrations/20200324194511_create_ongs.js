//MÉTODO UP: responsável pela criação da tabela
exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); //chave primária do banco de dados
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //string Estado de tamanho 2 caracters 
    });
};

//MÉTODO DOWN: responsável por desfazer a criação de uma tabela, voltar atrás (contrário do UP)
exports.down = function (knex) {
    return knex.schema.dropTable('ongs');
};