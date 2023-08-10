$(function () {
    checkBoxEvent()
    nextPageEvent()
    checkDoneEvent()
});

let checkBoxEvent = function () {
    $('.checkbtn').click(function () {
        $('#cancleChoose').attr('dataId', $(this).attr('id'))
        $('#doneChoose').attr('dataId', $(this).attr('id'))
    })
    // if ($('#ck_trx1:checked').length > 0 && $('#ck_reagents:checked').length > 0 && $('#ck_sample:checked').length > 0 && $('#ck_ipm:checked').length > 0 && $('#ck_96wpp:checked').length > 0 && $('#ck_trx3:checked').length > 0 && $('#ck_12wpwr:checked').length > 0 && $('#ck_dwp:checked').length > 0 && $('#ck_ashcan:checked').length > 0 && $('#ck_erc:checked').length > 0) {
    //     $('.nextPage').css('cursor', 'pointer')
    //     $('.nextPage').css('background-color', 'rgb(0, 0, 204)')
    //     $('.nextPage').css('color', 'white')
    // } else {
    //     $('.nextPage').css('cursor', 'not-allowed')
    //     $('.nextPage').css('background-color', 'rgb(51, 204, 51)')
    //     $('.nextPage').css('color', 'black')
    // }
}

// 檢查是否全部按鈕都Active
let checkEvent = function () {
    if ($('#trx1').hasClass('active') && $('#reagents').hasClass('active') && $('#sample').hasClass('active') && $('#ipcrm').hasClass('active') && $('#96wpcrp').hasClass('active') && $('#trx3').hasClass('active') && $('#12wpwr').hasClass('active') && $('#dwp').hasClass('active') && $('#ashcan').hasClass('active') && $('#erc').hasClass('active')) {
        $('.nextPage').css('cursor', 'pointer')
        $('.nextPage').css('background-color', 'rgb(0, 0, 204)')
        $('.nextPage').css('color', 'white')
    } else {
        $('.nextPage').css('cursor', 'not-allowed')
        $('.nextPage').css('background-color', '#d8d8d8')
        $('.nextPage').css('color', 'rgb(0, 176, 240)')
    }
}

// 檢查項
let checkDoneEvent = function () {
    $('#cancleChoose').click(function () {
        $(`#${$('#cancleChoose').attr('dataId')}`).removeClass('active')
        checkEvent()
    })
    $('#doneChoose').click(function () {
        $(`#${$('#cancleChoose').attr('dataId')}`).addClass('active')
        checkEvent()
    })
}

let nextPageEvent = function () {
    $('.nextPage').css('cursor', 'not-allowed')
    $('.nextPage').click(function () {
        if ($('#trx1').hasClass('active') && $('#reagents').hasClass('active') && $('#sample').hasClass('active') && $('#ipcrm').hasClass('active') && $('#96wpcrp').hasClass('active') && $('#trx3').hasClass('active') && $('#12wpwr').hasClass('active') && $('#dwp').hasClass('active') && $('#ashcan').hasClass('active') && $('#erc').hasClass('active')) {
            window.location.href = "/fifth";
        }
    })
}
