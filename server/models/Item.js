//model para criar e monitorar a tabela

const Sequelize = require('sequelize');
const db = require('./db');

const Item = db.define('items_table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    value: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});



module.exports = Item;