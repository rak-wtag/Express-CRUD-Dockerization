const express = require('express'),
    router=express.Router();

const db = require('../db')
const service = require('../services/employee.service')

//http://localhost:3000/api/employees/
router.get('/', async (req,res)=>{
    const employees = await service.getAllEmployees()
    res.send(employees)
})

router.get('/:id', async (req,res)=>{
    const employees = await service.getAllEmployeeById(req.params.id)
    if (employees.length==0)
        res.status(404).json('no record with given id: '+ req.params.id)
    else
        res.send(employees)
})

router.delete('/:id', async (req,res)=>{
    const deletedEmployee = await service.deleteEmployee(req.params.id)
    if (deletedEmployee==0)
        res.status(404).json('no record with given id: '+ req.params.id)
    else
        res.send(employees)
})


router.post('/', async (req, res) => {
    try {
        const newEmployeeId = await service.insertEmployee(req.body);
        res.status(201).json({ message: 'Employee created', id: newEmployeeId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);
        const affectedRows = await service.updateEmployeeById(req.params.id, req.body);
        if (affectedRows == 0)
            res.status(404).json('No record with given id: ' + req.params.id);
        else
            res.json({ message: 'Employee updated', id: req.params.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;