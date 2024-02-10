const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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
userSchema.statics.signup = async function(email, password) {

    // validation
    if(!email || !password){
        throw Error('All fields must be filled.')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid.')
    }
    if(password.length < 7){
        throw Error('Password must be a minimum of 8 characters.')
    }

    // this refers to our user, which we don't have access to yet
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

// static login method
userSchema.statics.login = async function(email, password) {
    // validation
    if(!email || !password){
        throw Error('All fields must be filled.')
    }

    // this refers to our user, which we don't have access to yet
    const user = await this.findOne({ email })

    // if can't find anyone with this email, throw error
    if(!user) {
        throw Error('Incorrect email.')
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match){
        throw Error('Incorrect password.')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)