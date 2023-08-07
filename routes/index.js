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
//第三層(勾選層 + 確認層)
router.get('/third', pageController.thirdPage);
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

// 業主api從app.js 轉移到這 =================================
// 示例路由处理程序，使用 apiUrl
router.get('', (req, res) => {
    const apiUrl = req.path;
    console.log(apiUrl)
    // 使用 apiUrl 进行 API 请求
    res.send('API URL: ' + apiUrl);
    console.log(apiUrl);
});
router.get('/api/pcrlib/open', (req, res) => {
    let PCR_open = require('../public/assets/js/PCR_open.js');
    PCR_open.req;
    res.json({ message: 'PCR 開蓋' });
});

router.get('/api/pcrlib/close', (req, res) => {
    let PCR_close = require('../public/assets/js/PCR_close.js');
    PCR_close.req;
    res.json({ message: 'PCR 關蓋' });
});


router.get('/api/start/read', (req, res) => {
    let read_head = require('../public/assets/js/read_head.js');
    read_head.req;
    res.json({ message: '槍頭' });
});


module.exports = router;
