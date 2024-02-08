// login user
const loginUser = async (req, res) => {
    // send back response with the response object
    res.json({mssg: 'login user'})
}

// signup user
const signupUser = async (req, res) => {
    // send back response with the response object
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}