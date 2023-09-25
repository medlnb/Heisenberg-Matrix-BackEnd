const User = require("../Models/UserModel")
const jwt = require("jsonwebtoken")

const createToken = (_id, expired) => {
  if(expired)
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
  else
    return jwt.sign({ _id }, process.env.SECRET)
}

const login = async (req, res) => {
  const {email,password,expired} = req.body
  const user = await User.findOne({ email }) 

  if (!user)
    return res.status(404).json("Email does'nt exist")
  
  if (password !== user.password)
    return res.status(404).json("wrong password")
  if(expired)
    res.status(201).json({ username: user.username, email, token: createToken(user._id, true) })
  if(!expired)
    res.status(201).json({ username:user.username,email ,token:createToken(user._id,false)})
}


const signup = async (req, res) => {

  const {expired} = req.body
  try {
    const exists = await User.findOne({ email:req.body.email }) 

    if (exists)
      return res.status(403).json("Email allrddy exists")
    
    const user = await User.create(req.body)

    if (user) {
      if(expired)
        res.status(201).json({ username: user.username, email, token: createToken(user._id, true) })
      if(!expired)
        res.status(201).json({ username:user.username,email ,token:createToken(user._id,false)})
    }
    else
      res.status(501).json("Error signing up")
  } catch (err) {
    res.status(404).json(err)
  }
}

module.exports = {
  login,
  signup
}