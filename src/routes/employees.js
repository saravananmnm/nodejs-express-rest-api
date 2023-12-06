const express = require('express');
const router = express.Router();
const Employee = require('../model/employee');

//Get All employees
router.get('/getAllEmployee',async (req, res) => {
    try {
        const listEmployees = await Employee.findAll();
        res.json(listEmployees);
    }catch (e) {
        res.status(500).json({ message: 'Failed to fetch employee.' });
    }
});
//Create New employee
router.post('/addEmployee',async (req, res) => {
    try{
        const employee = await Employee.create(req.body);
        res.json(employee);
    }catch (e) {
        res.status(500).json({ message: 'Failed to create employee.' });
    }
});

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        if (!employee) {
            res.status(404).json({ message: 'User not found.' });
        } else {
            res.json(employee);
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user.' });
    }
});

// Delete user by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRowsCount = await Employee.destroy({ where: { id: req.params.id } });
        if (deletedRowsCount === 0) {
            res.status(404).json({ message: 'Employee not found.' });
        } else {
            res.json({ message: 'Employee deleted successfully.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete Employee.' });
    }
});


module.exports = router;

