const { Database } = require('mongo')
const mongoose = require('mongoose')

const connectDB = () => {
    
    try {
        await mongoose.connect( process.env.MONGO-URI,
            {
                useNewParser: true,
                useUnifiedTopology:true
            }
        )
        console.log('Database is connected....')
        
    } catch (error) {
        
   console.log('Can not connect to Database !!!')
    }
    
    
    

}
module.exports = connectDB

