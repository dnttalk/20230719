
let arr1String = ''
let arr2String = ''

$(function () {
    generateArrString()
    sampleNumberUpdateEvent()
    nextPageEvent()
    asBtnEvent()
    countPopBtnEvent()
    checkDoneEvent()
});
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

// 試算µl
let countPopBtnEvent = function () {
    $('.countPopBtn').click(function () {
        let count = parseInt($('#sampleNumberInput').val())
        $('#masterMix').text((10 * (count + 1)).toString() + 'µl')
        $('#primerPool').text((2 * (count + 1)).toString() + 'µl')
        $('#total').text(((10 * (count + 1)) + (2 * (count + 1))).toString() + 'µl')
        $('#cancleChoose').attr('dataId', $(this).attr('id'))
        $('#doneChoose').attr('dataId', $(this).attr('id'))
    })
}
// 加減按鈕
let asBtnEvent = function () {
    $('#snAdd1').click(function () {
        let cSNI = parseInt($('#sampleNumberInput').val())
        if (cSNI + 1 >= $('#sampleNumberInput').attr('max')) {
            $('#sampleNumberInput').val($('#sampleNumberInput').attr('max'))
            enableObj($('#sampleNumberInput').attr('max'))
        } else {
            $('#sampleNumberInput').val(cSNI + 1)
            enableObj(cSNI + 1)
        }
    })
    $('#snSub1').click(function () {
        let cSNI = parseInt($('#sampleNumberInput').val())
        if (cSNI - 1 <= $('#sampleNumberInput').attr('min')) {
            $('#sampleNumberInput').val($('#sampleNumberInput').attr('min'))
            enableObj($('#sampleNumberInput').attr('min'))
        } else {
            $('#sampleNumberInput').val(cSNI - 1)
            enableObj(cSNI - 1)
        }
    })
    $('#snAdd10').click(function () {
        let cSNI = parseInt($('#sampleNumberInput').val())
        if (cSNI + 10 >= $('#sampleNumberInput').attr('max')) {
            $('#sampleNumberInput').val($('#sampleNumberInput').attr('max'))
            enableObj($('#sampleNumberInput').attr('max'))
        } else {
            $('#sampleNumberInput').val(cSNI + 10)
            enableObj(cSNI + 10)
        }
    })
    $('#snSub10').click(function () {
        let cSNI = parseInt($('#sampleNumberInput').val())
        if (cSNI - 10 <= $('#sampleNumberInput').attr('min')) {
            $('#sampleNumberInput').val($('#sampleNumberInput').attr('min'))
            enableObj($('#sampleNumberInput').attr('min'))
        } else {
            $('#sampleNumberInput').val(cSNI - 10)
            enableObj(cSNI - 10)
        }
    })
}
// Selection生成
let generateArrString = function () {
    for (let i = 0; i < arr1.length; i++) {
        arr1String = arr1String + `<option value="${arr1[i]}">${arr1[i]}</option>`
    }
    for (let i = 0; i < arr2.length; i++) {
        arr2String = arr2String + `<option value="${arr2[i]}">${arr2[i]}</option>`
    }
}
// 檢查是否全部按鈕都Active
let checkEvent = function () {
    if ($('#pm1').hasClass('active') && $('#mb').hasClass('active') && $('#pm2').hasClass('active')) {
        $('.nextPage').css('cursor', 'pointer')
        $('.nextPage').css('background-color', 'rgb(0, 0, 204)')
        $('.nextPage').css('color', 'white')
    } else {
        $('.nextPage').css('cursor', 'not-allowed')
        $('.nextPage').css('background-color', '#d8d8d8')
        $('.nextPage').css('color', 'rgb(0, 176, 240)')
    }
}
// 下一頁允許事件
let nextPageEvent = function () {
    $('.nextPage').css('cursor', 'not-allowed')
    $('.nextPage').click(function () {
        if ($('#pm1').hasClass('active') && $('#mb').hasClass('active') && $('#pm2').hasClass('active')) {
            window.location.href = "/third";
        }
    })
}
// 啟用table cell
let enableObj = function (count) {
    for (let i = 1; i <= 24; i++) {
        if (i <= count) {
            $(`#tdFirst_${i}`).removeAttr('disabled')
            if ($(`#tdSecond_${i}`).children().length == 0) {
                $(`#tdSecond_${i}`).append(`
                    <select class="select1">
                        ${arr1String}
                    </select>
                    <select class="select2">
                        ${arr2String}
                    </select>
                    `)
            }
        } else {
            $(`#tdSecond_${i}`).empty()
            $(`#tdFirst_${i}`).attr('disabled', 'disabled')
        }
    }
}

let sampleNumberUpdateEvent = function () {
    enableObj($('#sampleNumberInput').val())
    $('#sampleNumberInput').change(function () {
        enableObj($('#sampleNumberInput').val())
    })
}
