const express = require('express')
const app = express()

//settings
app.set('port', process.env.PORT || 3000)

//middlewares

//routes




// listen Server
app.listen(app.get('port'),()=>{

    console.log(`Server on port ${app.get('port')}`)

})