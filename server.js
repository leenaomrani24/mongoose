const express = require('express')

const app = express()

require('dotenv').config()

const connectDB = require('./config/connectDB')
connectDB()

app.use(express.json())

const router = require('./routes/contact')
app.use('/api/contact/',router)

const port = process.env.PORT 
app.listen(port,error => 
    error ? console.log('Can not run server')
       : console.log(`Server is running on port ${port}...`)
    )

