const { verifyToken } = require('../helpers/jwt')

const authentication = async (req, res, next) => {
  try {
    const token = req.get("token") //headers
    const userDecoded = verifyToken(token)
    if (userDecoded.id === 99){
      return next()
    }
    return res.status(401).json({
      name: "Authentication Error",
      message: "Error Authentication"
    })
  } catch (err) {
    return res.status(401).json(err)
  }
}

module.exports = authentication
