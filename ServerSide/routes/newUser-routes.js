
const express = require('express');

const newUserController = require('../controllers/newUser-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');
const IsLabAdmin = require('../middlewares/LabAdmin');

const router = express.Router();


router.post('/createNewUser',IsAuthenticated,IsLabAdmin,newUserController.newUser);
router.get('/getAdminUsers',IsAuthenticated,IsLabAdmin,newUserController.getNewUsers);

router.post('/createLabUser',IsAuthenticated,IsLabAdmin,newUserController.createLabUser);
router.get('/getLabUsers',IsAuthenticated,IsLabAdmin,newUserController.getLabUsers);
router.delete('/deleteLabUser/:id',IsAuthenticated,IsLabAdmin,newUserController.deleteLabUser);
router.put('/updateLabUser/:id',IsAuthenticated,IsLabAdmin,newUserController.editLabUser);


module.exports = router;