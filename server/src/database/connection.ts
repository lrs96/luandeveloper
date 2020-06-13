import knex from 'knex';
import path from 'path';
require('dotenv').config()

let data_connection;

if(process.env.NODE_ENV == 'development') {
    data_connection = {   
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, 'database.sqlite')
        },
        useNullAsDefault: true
    }
} else if(process.env.NODE_ENV == 'production') {
    data_connection = {   
        client: "pg",
        connection: {
            host: process.env.HEROKU_HOST,
            user: process.env.HEROKU_USER,
            password: process.env.HEROKU_PASSWORD,
            database: process.env.HEROKU_DATABASE,
            filename: process.env.DATABASE_URL
        },
    }
}
const connection = knex(data_connection)

export default connection;