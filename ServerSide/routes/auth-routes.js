const express = require('express');
const usercontroller = require('../controllers/user-controller');
const InfoController = require('../controllers/userInfo-controller');

const router = express.Router();

router.post('/signUp',usercontroller.signUp);
router.post('/login',usercontroller.login);
router.post('./info',InfoController.Info);


module.exports = router;