import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('voluntter_work', table => {
        table.increments('id').primary()
        table.string('image_url').notNullable();
        table.string('funcao').notNullable();
        table.string('name_work').notNullable();
        table.string('description').notNullable();
        table.string('site').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('voluntter_work');
}