const Sequelize = require('sequelize');
const sequelize = require('../db/connection');

const Employee = sequelize.define('employees', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    designation: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Employee;