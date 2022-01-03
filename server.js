const express = require('express')

app = express()

require('dotenv').config()

const port = process.env.PORT 
app.listen(port,error => 
    error ? comsole.log('Can not run server')
    : console.log(`Server is running on port ${port}...`)
    )
    
    