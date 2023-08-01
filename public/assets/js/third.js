$(function () {
    checkBoxEvent()
    nextPageEvent()
});

let checkBoxEvent = function () {
    $('input:checkbox').on('change', function () {
        if ($('#ck_trx1:checked').length > 0 && $('#ck_reagents:checked').length > 0 && $('#ck_sample:checked').length > 0 && $('#ck_ipm:checked').length > 0 && $('#ck_96wpp:checked').length > 0 && $('#ck_trx3:checked').length > 0 && $('#ck_12wpwr:checked').length > 0 && $('#ck_dwp:checked').length > 0 && $('#ck_ashcan:checked').length > 0 && $('#ck_erc:checked').length > 0) {
            $('.nextPage').css('cursor', 'pointer')
            $('.nextPage').css('background-color', 'rgb(0, 0, 204)')
            $('.nextPage').css('color', 'white')
        } else {
            $('.nextPage').css('cursor', 'not-allowed')
            $('.nextPage').css('background-color', 'rgb(51, 204, 51)')
            $('.nextPage').css('color', 'black')
        }
    });
}

let nextPageEvent = function () {
    $('.nextPage').css('cursor', 'not-allowed')
    $('.nextPage').click(function () {
        if ($('#ck_trx1:checked').length > 0 && $('#ck_reagents:checked').length > 0 && $('#ck_sample:checked').length > 0 && $('#ck_ipm:checked').length > 0 && $('#ck_96wpp:checked').length > 0 && $('#ck_trx3:checked').length > 0 && $('#ck_12wpwr:checked').length > 0 && $('#ck_dwp:checked').length > 0 && $('#ck_ashcan:checked').length > 0 && $('#ck_erc:checked').length > 0) {
            window.location.href = "/fifth";
        }
    })
}
