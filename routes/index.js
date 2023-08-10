var express = require('express');
var router = express.Router();
var path = require('path');
const child_process = require('child_process');
// 20230718 修改 ==========================
// 頁面控制
var pageController = require("../controller/pageController");
var loginController = require("../controller/loginController");

// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 頁面導向區塊 ===========================
//loading過場頁面
router.get('/loading', pageController.loadingPage);
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
router.get('/api/start/open', async (req, res) => {
    console.log(path.join(__dirname, '../public/assets/js/PCR_open.js'))
    var workerProcess = child_process.exec('node ' + path.join(__dirname, '../public/assets/js/PCR_open.js'), function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    await workerProcess.on('exit', function (code) {
        console.log('子進程已退出，退出碼 ' + code);
    });
    // res.json({ status: '下班囉~' })
    res.json({ message: 'PCR 開蓋' });
    // const PCR_open = require('../public/assets/js/PCR_open.js');
    // PCR_open.req;
    // res.json({ message: 'PCR 開蓋' });
});

router.get('/api/start/close', async (req, res) => {
    var workerProcess = child_process.exec('node ' + path.join(__dirname, '../public/assets/js/PCR_close.js'), function (error, stdout, stderr) {
        if (error) {
            console.log(error.stack);
            console.log('Error code: ' + error.code);
            console.log('Signal received: ' + error.signal);
        }
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
    });

    await workerProcess.on('exit', function (code) {
        console.log('子進程已退出，退出碼 ' + code);
    });
    // res.json({ status: '下班囉~' })
    res.json({ message: 'PCR 關蓋' });
    // const PCR_close = require('../public/assets/js/PCR_close.js');
    // PCR_close.req;
    // res.json({ message: 'PCR 關蓋' });
});

router.get('/api/start/read', (req, res) => {
    const read_head = require('../public/assets/js/read_head.js');
    read_head.req;
    res.json({ message: '槍頭' });
});

// 業主api從app.js 轉移到這 =================================

module.exports = router;
