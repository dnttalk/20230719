var express = require('express');
var router = express.Router();

// 20230718 修改 ==========================
// 頁面控制
var pageController = require("../controller/pageController");
var loginController = require("../controller/loginController");

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 頁面導向區塊 ===========================
//第一頁(主頁)
router.get('/', pageController.firstPage);
//第二層
router.get('/second', pageController.secondPage);
//第三層(勾選層)
router.get('/third', pageController.thirdPage);
//第四層(確認層)
router.get('/forth', pageController.forthPage);
//第五層(進度層)
router.get('/fifth', pageController.fifthPage);
//自我診斷頁面
router.get('/selfCheck', pageController.selfCheckPage);
//報告頁面
router.get('/report', pageController.reportPage);
//紀錄頁面
router.get('/history', pageController.historyPage);
//登入頁面
router.get('/login', pageController.loginPage);
// 頁面導向區塊 ===========================

// API區段
router.post('/api/user/login', loginController.login)
// 20230718 修改 ==========================

module.exports = router;
