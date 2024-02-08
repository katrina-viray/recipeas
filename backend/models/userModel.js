const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String, 
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    }
})

// static signup method
userSchema.statics.signup = async (email, password) => {
    // this refers to our user
    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already in use.')
    }

    // generate salt; 10 is the default value
    /*salting= act of adding a series of random characters to a 
    password before going through the hashing function */
    const salt = await bcrypt.genSalt(10)
    // hashing password
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)