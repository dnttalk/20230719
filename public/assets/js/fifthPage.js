let pauseStatus = 0;
let intervalObj1 = null;
let processStatus = 1;
let timerPaused = false;  // 初始狀態為計時器運行
let intervalId = null;    // 計時器間隔的 ID
$(function () {
    pauseEvent();
    poe();
    ChangeStatus();
    flashNumber(0); // 開始循環閃爍狀態數字
    setupActionButtons(); // 設定開始和暫停按鈕的點擊事件
    startTimer(); // 開始計時器
});

let statusElementMap = {
    1: '#statusNumber1',
    2: '#statusNumber2',
    3: '#statusNumber3',
    4: '#statusNumber4',
    5: '#statusNumber5',
    6: '#statusNumber6'
};

let flashNumber = function (count) {
    if (count >= 5) {
        return;
    }

    $(statusElementMap[processStatus]).fadeOut(500).fadeIn(500);

    setTimeout(function () {
        flashNumber(count + 1);
    }, 1000);
};

let ChangeStatus = function () {
    let cStatus = setInterval(function () {
        flashNumber(0); // 開始循環閃爍狀態數字
        if (processStatus < 7) {
            processStatus++;
        } else {
            processStatus++;
            clearInterval(cStatus);
            $('#pcText').css('color', 'rgb(44, 235, 44)');
            setTimeout(function () {
                // window.location.href = "/report";
            }, 3000);
        }
    }, 5000);
};

let pauseEvent = function () {
    $('.btn-pause').on('click', function () {
        if (pauseStatus === 0) {
            pauseStatus = 1;
            $('.btn-pause-text').text('Continue');
            intervalObj1 = setInterval(function () {
                $('.btn-pause').fadeIn(500).fadeOut(500);
            }, 1000);
        } else {
            $('.btn-pause-text').text('Pause');
            $('.btn-pause').delay(1000).fadeIn(500);
            clearInterval(intervalObj1);
        }
    });
};

let poe = function () {
    $('.btn-confirm').on('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('EOPModal'), {
            keyboard: false
        });
        myModal.show();
    });
    $('#confirmPOE').on('click', function () {
        window.location.href = "/";
    });
};

function performAction(apiEndpoint, requiredSections) {
    if (requiredSections.every(section => $(section).hasClass('active'))) {
        $.get(apiEndpoint, function (data) {
            console.log(data);
        });
    }
}

function setupActionButtons() {
    $('#start').click(function () {
        $.get("/api/start/M300", function (data) {
            console.log(data);
        });
        timerPaused = false; // 恢復計時器
        startTimer();  // 重新啟動計時器
        // 其他操作，例如觸發開始 API 端點

    });

    $('#pause').click(function () {
        $.get("/api/start/M301", function (data) {
            console.log(data);
        });
        timerPaused = true;
        clearInterval(intervalId);  // 清除計時器間隔
        pausedTime = Date.now() - (startTime + pausedTime); // 計算暫停的時間
        // 其他操作，例如觸發暫停 API 端點
    });
}

function startTimer() {
    let startTime = Date.now();

    intervalId = setInterval(function () {
        if (!timerPaused) {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;

            const seconds = Math.floor((elapsedTime / 1000) % 60);
            const minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
            const hours = Math.floor((elapsedTime / 1000 / 60 / 60) % 24);

            const timerElement = document.getElementById('timer');
            timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

// 初始狀態下啟動計時器
startTimer();