<<<<<<< HEAD
const isAdmin = (req, res, next) => {
  const userEmail = req.user.email;
  if (userEmail !== "maliha@gmail.com") {
    return res.status(401).json({
      success: false,
      message: "login with admin account please",
    });
  } else {
    next();
  }
};

module.exports = isAdmin;
=======

const isAdmin =(req,res,next)=>{
    const userEmail = req.user.email;
    if(userEmail !== 'maliha@gmail.com'){
        return res.status(401).json({
            success: false,
            message: "login with admin account please"
        })
    }else{
        next();
    }
}

module.exports = isAdmin;
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17
