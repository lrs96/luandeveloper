import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('social_media', table => {
        table.increments('id').primary();
        table.string('social').notNullable();
        table.string('social_url').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('social_media');
}