//conexão com mysql

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('managerdatabase', 'root', '5865', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate().then(() => {
    console.log("Successfully");
}).catch(() => {
    console.log("ERROR");
});




module.exports = sequelize;