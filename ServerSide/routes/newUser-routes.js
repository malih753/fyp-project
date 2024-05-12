
const express = require('express');

const newUserController = require('../controllers/newUser-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');
const IsLabAdmin = require('../middlewares/LabAdmin');

const router = express.Router();


router.post('/create-newUser',IsAuthenticated,IsLabAdmin,newUserController.newUser);
router.get('/newUser',IsAuthenticated,IsLabAdmin,newUserController.getNewUser);



module.exports = router;