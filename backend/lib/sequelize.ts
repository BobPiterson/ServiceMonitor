import {Sequelize} from 'sequelize-typescript';

function sequelizeLog(message?: any) {
    console.log(`[SEQUELIZE] ${message}`)
}

export const sequelize = new Sequelize({
    database: 'chat_DB',
    dialect: 'mariadb',
    host: '192.168.1.21',
    username: 'chat',
    password: 'flq-23q-so5-q1l',
    models: [__dirname + '/models'],
    logging: sequelizeLog
});