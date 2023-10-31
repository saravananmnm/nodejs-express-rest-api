const Sequelize = require('sequelize');

const sequelize =new Sequelize("saro", "root", "root", {
    host: "localhost",
    dialect: 'mysql',
});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});
sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });


module.exports = sequelize;