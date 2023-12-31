import dotenv from 'dotenv';
dotenv.config({path: '../todo-app/.env'});

export const dbConnection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};