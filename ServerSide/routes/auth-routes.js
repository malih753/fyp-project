const express = require('express');
const usercontroller = require('../controllers/user-controller');
const InfoController = require('../controllers/userInfo-controller');

const router = express.Router();

router.post('/signUp',usercontroller.signUp);
router.post('/login',usercontroller.login);
<<<<<<< HEAD
router.post('/info',InfoController.Info);
=======
router.post('/Info',InfoController.Info);
router.get('/getInfo',InfoController.getInfo);
>>>>>>> 85161aef2b8f7b2cd67111249775ed7cf03e8915


module.exports = router;