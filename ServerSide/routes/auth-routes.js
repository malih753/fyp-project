const express = require('express');
const usercontroller = require('../controllers/user-controller');

const router = express.Router();

router.post('/signUp',usercontroller.signUp);
router.post('/login',usercontroller.login);

module.exports = router;