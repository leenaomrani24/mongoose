const { Database } = require('mongo')
const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect( process.env.MONGO-URI,
    {
        useNewParser: true,
        useUnifiedTopology:true
    }
    
    
    )

}
module.exports = connectDB

