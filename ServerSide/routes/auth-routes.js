const express = require('express');
const usercontroller = require('../controllers/user-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');

const router = express.Router();

router.post('/signUp',usercontroller.signUp);
router.post('/login',usercontroller.login);
router.get('/my_profile',IsAuthenticated,usercontroller.myProfile);
<<<<<<< HEAD
router.get('/logout',IsAuthenticated,usercontroller.logoutUser);
=======
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

module.exports = router;