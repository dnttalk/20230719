$(document).ready(function () {
    const requiredSections = [
        '#trx1', '#reagents', '#sample', '#ipcrm', '#96wpcrp',
        '#trx3', '#12wpwr', '#dwp', '#ashcan', '#erc'
    ];

    function updateNextButtonState() {
        const allSectionsActive = requiredSections.every(section => $(section).hasClass('active'));
        const $nextPageButton = $('.nextPage');

        if (allSectionsActive) {
            $nextPageButton.css({
                'cursor': 'pointer',
                'background-color': 'rgb(0, 0, 204)',
                'color': 'white'
            });
        } else {
            $nextPageButton.css({
                'cursor': 'not-allowed',
                'background-color': '#d8d8d8',
                'color': 'rgb(0, 176, 240)'
            });
        }
    }

    $('.checkbtn').click(function () {
        const clickedId = $(this).attr('id');
        $('#cancleChoose, #doneChoose').attr('dataId', clickedId);
    });

    $('#cancleChoose, #doneChoose').click(function () {
        const dataId = $(this).attr('dataId');
        $(`#${dataId}`).toggleClass('active');
        updateNextButtonState();
    });

    $('.nextPage').click(function () {
        if (requiredSections.every(section => $(section).hasClass('active'))) {
            window.location.href = "/fifth";
            $.get("/api/start/stepstart", function (data) {
                console.log(data);
            });
        }
    });

    // 初始狀態設定
    updateNextButtonState();
});