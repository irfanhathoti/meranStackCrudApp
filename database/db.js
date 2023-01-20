const mongoose = require('mongoose')


const connection = async () => {


    const URL = process.env.DATABASE
    console.log(URL)

    try {
        mongoose.set({strictQuery:false})
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected successfully....")

    } catch (error) {
        console.log("Error from DataBase", error)
    }


}

module.exports = connection