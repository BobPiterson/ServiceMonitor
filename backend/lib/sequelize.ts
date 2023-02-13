import {Sequelize} from 'sequelize-typescript';

function sequelizeLog(message?: any) {
    console.log(`[SEQUELIZE] ${message}`)
}

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../sqlite/database.sqlite',
    models: [__dirname + '/models'],
    logging: sequelizeLog
});