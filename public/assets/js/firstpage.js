$(function () {
    btnAnimation()
});


let btnAnimation = function () {
    $('#btn-pcr').on('click', function () {
        $('#btn-pcr').fadeOut(500)
        $('#btn-pcr').fadeIn(500)
        $('#btn-pcr').fadeOut(500)
        $('#btn-pcr').fadeIn(500)
        $('#btn-pcr').fadeOut(500)
        $('#btn-pcr').fadeIn(500)
        $('#btn-pcr').fadeOut(500)
        $('#btn-pcr').fadeIn(500)
        $('#btn-pcr').fadeOut(500)
        $('#btn-pcr').fadeIn(500)
    })
}