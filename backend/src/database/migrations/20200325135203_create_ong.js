
//Método up é responsável pela criação da Tabela.
// Para rodar preciso digitar npx migrate: latest
 exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    //fixa o tamanho do texto, no segundo parâmetro
    table.string('uf', 2).notNullable();
  });
 
};
//Se der algum problema e eu precisar voltar atrás.
exports.down = function(knex) {
  Knex.schema.dropTable('ongs');
};
