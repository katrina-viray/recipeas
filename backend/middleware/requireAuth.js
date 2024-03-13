const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

  // verify user is authenicated
  // one header property is the authorization property, which we're grabbing here
  // should contain the json web token
  const {authorization} = req.headers

  if (!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  // value of authorization looks like:
  // 'Bearer (token here, looks like jdhiowejdew.diwoejdwe.fhjioewjfdwe (has 3 parts))'
  // grabbing only the token with split
  const token = authorization.split(' ')[1]

  // verify token hasn't been tampered with
  try{
    const {_id} = jwt.verify(token, process.env.SECRET)

    // use id from payload above to find user in database
    // attaching user property w/.user so that future middleware can have 
    // the user property (since this middleware runs first.)
    req.user = await User.findOne({_id}).select('_id')
    next()

  } catch(error){
    console.log(error)
    res.status(401).json({error: 'Request is not authorized'})
  }
}

module.export = requireAuth