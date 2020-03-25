
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments(); //auto incremento (id)

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //valor monetário

        //Coluna para armazenar a ONG que cadastrou o incident:
        table.string('ong_id').notNullable();

        //Criação da foreign key (chave estrangeira):
        table.foreign('ong_id').references('id').inTable('ongs');
        //o campo ong_id da tabela incidents é uma foreign key, que referencia o ID da tabela ONGS
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
