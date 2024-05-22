
const express = require('express');

const InfoController = require('../controllers/userInfo-controller');
const IsAuthenticated = require('../middlewares/authMiddleWare');

const router = express.Router();


router.post('/create-info',IsAuthenticated, InfoController.Info);
router.get('/getInfo',IsAuthenticated,InfoController.getInfo);
router.get('/getmyOrder',IsAuthenticated,InfoController.getMyOrders);



module.exports = router;