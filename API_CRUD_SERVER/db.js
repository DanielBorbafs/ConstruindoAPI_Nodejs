const sequelize = require ('sequelize')

const database = new sequelize('dbnode', 'root','',
{
    dialect: 'mysql', host: 'localhost'
});

database.sync();

module.exports = database;
