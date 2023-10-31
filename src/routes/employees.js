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


module.exports = router;

