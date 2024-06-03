const express = require('express');
const usercontroller = require('../controllers/user-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');

const router = express.Router();

router.post('/signUp',usercontroller.signUp);
router.post('/login',usercontroller.login);
router.get('/my_profile',IsAuthenticated,usercontroller.myProfile);
router.get('/logout',IsAuthenticated,usercontroller.logoutUser);

module.exports = router;