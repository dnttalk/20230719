let pauseStatus = 0;
let intervalObj1 = null;

$(function () {
    pauseEvent()
    poe()
});

let pauseEvent = function () {
    $('.btn-pause').on('click', function () {
        if (pauseStatus == 0) {
            pauseStatus = 1
            $('.btn-pause').text('Continue')
            intervalObj1 = setInterval(function () {
                $('.btn-pause').fadeIn(500).fadeOut(500);
            }, 1000);
        } else {
            $('.btn-pause').text('Pause')
            $('.btn-pause').delay(1000).fadeIn(500)
            clearInterval(intervalObj1);
        }
    })
}

let poe = function () {
    $('#confirmPOE').on('click', function () {
        window.location.href = "/";
    })
}