$(function () {
    initData()
    nextPageEvent()
    prevPageEvent()
});

let initData = function () {
    let scount = getUrlParameter('scount')
    let sn = getUrlParameter('sn')
    let s1 = getUrlParameter('s1')
    let s2 = getUrlParameter('s2')
    let snArr = sn.split(',')
    let s1Arr = s1.split(',')
    let s2Arr = s2.split(',')
    $('#sampleNumberInput').val(scount)
    for (let i = 1; i <= scount; i++) {
        $(`#tdFirst_${i}`).text(snArr[i - 1])
        $(`#tdSecond_${i}`).text(s1Arr[i - 1] + ',' + s2Arr[i - 1])
    }
}

// 下一頁允許事件
let nextPageEvent = function () {
    $('.nextPage').css('cursor', 'pointer')
    $('.nextPage').css('background-color', 'rgb(0, 0, 204)')
    $('.nextPage').css('color', 'white')
    $('.nextPage').click(function () {
        let id = getUrlParameter('id')
        window.location.href = "/third?id=" + id;
    })
}
// 上一頁事件
let prevPageEvent = function () {
    $('.prevPage').click(function () {
        let id = getUrlParameter('id')
        window.location.href = "/second?id=" + id;
    })
}