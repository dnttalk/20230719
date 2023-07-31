let pauseStatus = 0;
let intervalObj1 = null;

// 流程狀態變數(之後請以API去改變status)
let processStatus = 1

$(function () {
    pauseEvent()
    poe()

    // 狀態改變
    ChangeStatus()
    flashNumber()

});


let flashNumber = function () {
    let count = 0
    while (count < 5) {
        if (processStatus == 1) {
            $('#statusNumber1').fadeOut(500).fadeIn(500)
        } else if (processStatus == 2) {
            $('#statusNumber2').fadeOut(500).fadeIn(500)
        } else if (processStatus == 3) {
            $('#statusNumber3').fadeOut(500).fadeIn(500)
        } else if (processStatus == 4) {
            $('#statusNumber4').fadeOut(500).fadeIn(500)
        } else if (processStatus == 5) {
            $('#statusNumber5').fadeOut(500).fadeIn(500)
        }
        count++
    }

}

let ChangeStatus = function () {
    let cStatus = setInterval(function () {
        flashNumber()
        if (processStatus < 6) {
            processStatus++
        } else {
            processStatus++
            alert('done all process')
            clearInterval(cStatus)
        }
    }, 5000)
}

let pauseEvent = function () {
    $('.btn-pause').on('click', function () {
        if (pauseStatus == 0) {
            pauseStatus = 1
            $('.btn-pause-text').text('Continue')
            intervalObj1 = setInterval(function () {
                $('.btn-pause').fadeIn(500).fadeOut(500);
            }, 1000);
        } else {
            $('.btn-pause-text').text('Pause')
            $('.btn-pause').delay(1000).fadeIn(500)
            clearInterval(intervalObj1);
        }
    })
}

let poe = function () {
    $('.btn-confirm').on('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('EOPModal'), {
            keyboard: false
        })
        myModal.show()
    })
    $('#confirmPOE').on('click', function () {
        window.location.href = "/";
    })
}
