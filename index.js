const express = require('express'),
    app=express();
require('express-async-errors')

const db = require('./db')
    employeeRoutes = require('./controllers/employee.controller')
app.use(express.json());

app.use('/api/employees',employeeRoutes)

app.use((err,req,res,next)=>{
    console.log(err)
    res.status(err.status||500).send('Something went wrong!')
})

db.query("SELECT 1")
    .then(() => {
        console.log('db connection successful')
        app.listen(3000,
            () => console.log('server at port 3000'))
    })
    .catch(err=>console.log('db connection failed. \n'+err))


