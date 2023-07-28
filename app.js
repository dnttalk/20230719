const cors = require('cors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3000;
const index = require('./routes/index');
const app = express();
// 20230718 修改 ==========================
// const users = require('./routes/users');
// const first = require('./routes/first');
// const ejs = require('ejs');
// app.engine('html', ejs.__express);
// 20230718 修改 ==========================
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + '/public'));
app.use('/', index);
// 20230718 修改 ==========================
// app.use('/users', users);
// app.use('/users', first);
// 20230718 修改 ==========================

app.use((req, res, next) => {
    const apiUrl = req.protocol + '://' + req.get('host') + '/api';
    // 将 apiUrl 存储到 res.locals 中，以便在后续的路由处理程序中使用
    res.locals.apiUrl = apiUrl;
    next();
});

// 示例路由处理程序，使用 apiUrl
app.get('/users', (req, res) => {
    const apiUrl = res.locals.apiUrl;
    // 使用 apiUrl 进行 API 请求
    res.send('API URL: ' + apiUrl);
    console.log(apiUrl);
});
app.get('/api/start/open', (req, res) => {
    const PCR_open = require('./public/javascripts/PCR_open.js');
    PCR_open.req;
    res.json({ message: 'PCR 開蓋' });
});

app.get('/api/start/close', (req, res) => {
    const PCR_close = require('./public/javascripts/PCR_close.js');
    PCR_close.req;
    res.json({ message: 'PCR 關蓋' });
});

app.get('/api/start/read', (req, res) => {
    const read_head = require('./public/javascripts/read_head.js');
    read_head.req;
    res.json({ message: '槍頭' });
});

app.get('/api/start/both', (req, res) => {
    const openScript = require('./public/javascripts/PCR_open.js');
    openScript.req;
    const closeScript = require('./public/javascripts/PCR_close.js');
    closeScript.req;
    res.json({ message: 'PCR 開蓋並關蓋' });
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
// 啟動服務器
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

