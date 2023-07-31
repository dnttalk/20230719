// const sampleNumberInput = document.getElementById("sampleNumberInput");
// const sampleNameInputs = document.querySelectorAll(".sample-name");
// const indexNameInputs = document.querySelectorAll(".index-name");

// sampleNumberInput.addEventListener("input", function () {
//     const sampleNumber = parseInt(sampleNumberInput.value);
//     const maxSampleNumber = parseInt(sampleNumberInput.getAttribute("max"));

//     if (
//         isNaN(sampleNumber) ||
//         sampleNumber < 1 ||
//         sampleNumber > maxSampleNumber
//     ) {
//         sampleNumberInput.value = "";
//         return;
//     }

//     // Disable excess sample name inputs
//     sampleNameInputs.forEach(function (input, index) {
//         if (index >= sampleNumber) {
//             input.value = "";
//             input.disabled = true;
//             input.classList.add("disabled");
//         } else {
//             input.disabled = false;
//             input.classList.remove("disabled");
//         }
//     });

//     // Disable excess index name inputs
//     indexNameInputs.forEach(function (input, index) {
//         if (index >= sampleNumber) {
//             input.value = "";
//             input.disabled = true;
//             input.classList.add("disabled");
//         } else {
//             input.disabled = false;
//             input.classList.remove("disabled");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const sampleNumberInput = document.getElementById("sampleNumberInput");
//     const sampleNameInputs = document.querySelectorAll(".sample-name-input");

//     sampleNumberInput.addEventListener("input", function (event) {
//         const sampleNumber = parseInt(event.target.value);

//         // Disable extra sample name inputs
//         sampleNameInputs.forEach((input, index) => {
//             if (index >= sampleNumber) {
//                 input.value = "";
//                 input.disabled = true;
//                 input.classList.add("disabled-input");
//             } else {
//                 input.disabled = false;
//                 input.classList.remove("disabled-input");
//             }
//         });
//     });
// });

$(function () {
    sampleNumberUpdateEvent()
    nextPageEvent()
    checkBoxEvent()
});

let checkBoxEvent = function () {
    $('input:checkbox').on('change', function () {
        if ($('#magn:checked').length > 0 && $('#pm1:checked').length > 0 && $('#pm2:checked').length > 0) {
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
        if ($('#magn:checked').length > 0 && $('#pm1:checked').length > 0 && $('#pm2:checked').length > 0) {
            window.location.href = "/third";
        }
    })
}

let enableObj = function (count) {
    $("input[class='customText']").each(function (i, obj) {
        if (i < count) {
            $(obj).removeAttr('disabled')
        } else {
            $(obj).attr('disabled', 'disabled')
        }
    })
    $("select[class='select1']").each(function (i, obj) {
        if (i < count) {
            $(obj).removeAttr('disabled')
        } else {
            $(obj).attr('disabled', 'disabled')
        }
    })
    $("select[class='select2']").each(function (i, obj) {
        if (i < count) {
            $(obj).removeAttr('disabled')
        } else {
            $(obj).attr('disabled', 'disabled')
        }
    })
}

let sampleNumberUpdateEvent = function () {
    enableObj($('#sampleNumberInput').val())

    $('#sampleNumberInput').change(function () {
        enableObj($('#sampleNumberInput').val())
    })
}