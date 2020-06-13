import path from 'path';
require('dotenv').config()

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        },
        useNullAsDefault: true,
    },
    production: {
        client: "pg",
        connection: {
            host: process.env.HEROKU_HOST,
            user: process.env.HEROKU_USER,
            password: process.env.HEROKU_PASSWORD,
            database: process.env.HEROKU_DATABASE,
            filename: process.env.DATABASE_URL
        },
        migrations: {
            directory: path.resolve(__dirname, 'src', 'database', 'migrations')
        },
        seeds: {
            directory: path.resolve(__dirname, 'src', 'database', 'seeds')
        },
        useNullAsDefault: true,
    }
}