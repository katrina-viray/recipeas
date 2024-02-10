const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

// reusable function generate tokens
const createToken = (_id) => {
    // arguments are the payload, secret string, and options
    // (here we chose the expires option, in this case 3 days)
    return jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '3d'})
}

// login user
const loginUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)

        // create token
        const token = createToken(user._id)

        // passing token back to the browser
        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)

        // create token
        const token = createToken(user._id)

        // passing token back to the browser
        res.status(200).json({email, token})
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {signupUser, loginUser}