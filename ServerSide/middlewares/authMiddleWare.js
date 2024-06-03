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
<<<<<<< HEAD
        // console.log(token)


        const decode = jwt.verify(token, process.env.SECRET_KEY)
        // console.log(decode)
=======
        console.log(token)


        const decode = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decode)
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

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
<<<<<<< HEAD
        // console.log(user)
=======
        console.log(user)
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

        req.user = user
        next()

    } catch (error) {
        console.log(error)
    }

}
module.exports = IsAuthenticated