const { generateToken } = require("../helpers/jwt");

class UserController {
    static login(req,res){
        const {username, password} = req.body
        if (username === "ridho" && password === "1234567890"){
            let payload = {
                id : 99,
            }
            const token = generateToken(payload)
            return res.status(200).json({token})
        }
        let response = {
            message: "invalid user name or password !"
        }
        return res.status(401).json(response)
    }
}

module.exports = UserController