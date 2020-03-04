const {Router} = require('express')
const router = Router()

const mysqlConnection = require('../database')

router.get('/',(req,res)=>{

   const empleados = mysqlConnection.query('SELECT * FROM employees',(err,rows,fields)=>{
        if(!err){
            res.json(rows)
        }else{
            console.log(err)
        }
   })
})

router.get('/:id',(req,res)=>{

    const {id} = req.params
    
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?',[id],(err,rows,field)=>{

        if(!err){
            res.json(rows[0])
        }else{
            console.log(err)
        }
    })

})

router.post('/',(req,res)=>{
    const {id,name,salary} = req.body
const query= "CALL employeeAddOrEdit(?, ? , ?);"

    mysqlConnection.query(query,[id,name,salary], (err,rows,fields)=>{

        if(!err){
            res.json({Status: 'Employee Saved'})
        }else{
            console.log(err)
        }
    })

})

router.put('/:id',(req,res)=>{

    const{name, salary} = req.body
    const {id} = req.params

    const query= "CALL employeeAddOrEdit(?, ? , ?);"
    mysqlConnection.query(query,[id,name,salary], (err,rows,fields)=>{

        if(!err){
            res.json({Status: 'Employee Updated'})
        }else{
            console.log(err)
        }
    })

})



module.exports =  router