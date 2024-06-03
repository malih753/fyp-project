
const express = require('express');

const InfoController = require('../controllers/userInfo-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');
const  stripeController = require('../middlewares/stripe.middleware');

const router = express.Router();


router.post('/create-info',IsAuthenticated,stripeController);
router.get('/getInfo',IsAuthenticated,InfoController.getInfo);
router.get('/getmyOrder',IsAuthenticated,InfoController.getMyOrders);
router.get('/getTopSellingInfos',IsAuthenticated,InfoController.getTopSellingPackages);
router.get('/getMessages',IsAuthenticated,InfoController.getMessages);



module.exports = router;