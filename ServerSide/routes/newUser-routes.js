
const express = require('express');

const newUserController = require('../controllers/newUser-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');
const IsLabAdmin = require('../middlewares/LabAdmin');

const router = express.Router();


router.post('/createNewUser',IsAuthenticated,IsLabAdmin,newUserController.newUser);
router.get('/getAdminUsers',IsAuthenticated,IsLabAdmin,newUserController.getNewUsers);



module.exports = router;