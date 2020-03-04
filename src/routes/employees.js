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



module.exports =  router