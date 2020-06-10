import Knex from 'knex';

export async function seed(knex: Knex){ 
    await knex('personal_data').insert([
        {
            name: "Luan",
            lastname: "Rodrigues",
            age: "23",
            email: "luanlrs96@gmail.com"
        },
    ])
}