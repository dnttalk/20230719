// PCR狀態宣告
let status = 0 // 0:PCR open, 1:PCR opening, 2:PCR close, 3:PCR closing 
let statusArr = ['PCR open', 'PCR opening', 'PCR close', 'PCR closing']

$(function () {
    btnAnimation()
});

let statusEvent = function () {
    if (status < 3) {
        status++
        $('#pcrBtn').text(statusArr[status])
        console.log(statusArr[status])
    } else {
        status = 0
        $('#pcrBtn').text(statusArr[status])
        console.log(statusArr[status])
    }
    if (statusArr[status] == 'PCR opening') {
        $.get("/api/start/open", function (data) {
            console.log(data)
        });
    }
    if (statusArr[status] == 'PCR closing') {
        $.get("/api/start/close", function (data) {
            console.log(data)
        });
    }
}

let btnAnimation = function () {
    $('#pcrBtn').on('click', function () {
        let count = 0
        statusEvent()
        $('#pcrBtn').prop('disabled', true)
        while (count < 5) {
            $('#pcrBtn').fadeOut(500)
            $('#pcrBtn').fadeIn(500)
            count++
        }
        $('#pcrBtn').promise().done(function () {
            statusEvent()
            $('#pcrBtn').prop('disabled', false)
        });
    })
}
// 開關狀態，初始值為關閉
let isPCRStarted = false;

// 按鈕事件監聽器
document.getElementById('pcrBtn').addEventListener('click', function () {
    // 取得按鈕元素
    const pcrBtn = document.getElementById('pcrBtn');

    // API 伺服器位址
    const apiUrl = isPCRStarted
        ? 'http://localhost:3000/api/start/close'
        : 'http://localhost:3000/api/start/open';

    // 發送 GET 請求到 API 伺服器
    fetch(apiUrl)
        .then(response => response.json()) // 解析回應為 JSON 格式
        .then(data => {
            console.log(data.message); // 將伺服器回應記錄到控制台

            // 切換開關狀態
            isPCRStarted = !isPCRStarted;
            // 根據當前開關狀態更新按鈕文字
            pcrBtn.textContent = isPCRStarted ? 'Stop PCR' : 'Start PCR';
        })
        .catch(error => {
            console.error('錯誤:', error); // 將錯誤記錄到控制台
        });
});