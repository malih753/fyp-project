
const express = require('express');

const InfoController = require('../controllers/userInfo-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');
<<<<<<< HEAD
const  stripeController = require('../middlewares/stripe.middleware');
=======
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17

const router = express.Router();


<<<<<<< HEAD
router.post('/create-info',IsAuthenticated,stripeController);
router.get('/getInfo',IsAuthenticated,InfoController.getInfo);
router.get('/getmyOrder',IsAuthenticated,InfoController.getMyOrders);
router.get('/getTopSellingInfos',IsAuthenticated,InfoController.getTopSellingPackages);
router.get('/getMessages',IsAuthenticated,InfoController.getMessages);
=======
router.post('/create-info',IsAuthenticated, InfoController.Info);
router.get('/getInfo',IsAuthenticated,InfoController.getInfo);
router.get('/getmyOrder',IsAuthenticated,InfoController.getMyOrders);
>>>>>>> e1e9f24fd29144aa73500ecddc394fd783053d17



module.exports = router;