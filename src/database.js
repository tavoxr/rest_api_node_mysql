const mysql =  require('mysql')

// const db={
   
// }

const mysqlConnection = mysql.createConnection({ host:'localhost',
user:'root',
password: '',
database: 'company'})

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err)
        return
    }else{
        console.log('Database connected')
    }

});

module.exports = mysqlConnection


