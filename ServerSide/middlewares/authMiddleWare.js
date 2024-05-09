const User = require("../model/User")
const jwt = require("jsonwebtoken")

const IsAuthenticated = async (req, res, next) => {

    try {
        const token = req.cookies?.accessToken

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request"
            })
        }
        console.log(token)


        const decode = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decode)

        if (!decode) {

            return res.status(401).json({
                success: false,
                message: "Invalid access token"
            })
        }
        const user = await User.findById(decode._id).select("-password")

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthroized request"
            })
        }
        console.log(user)

        req.user = user
        next()

    } catch (error) {
        console.log(error)
    }

}
module.exports = IsAuthenticated