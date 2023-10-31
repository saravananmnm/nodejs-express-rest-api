const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
});

module.exports = User;