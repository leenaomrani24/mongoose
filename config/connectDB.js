
const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database is connected....')

    } catch (error) {

        console.log('Can not connect to Database !!!')
    }




}
module.exports = connectDB

