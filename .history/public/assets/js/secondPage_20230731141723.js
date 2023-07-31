$(function () {
    const $nextPage = $('.nextPage');
    const $checkboxes = $('input:checkbox');
    const $magnCheckbox = $('#magn');
    const $pm1Checkbox = $('#pm1');
    const $pm2Checkbox = $('#pm2');
    const $customTextInputs = $("input.customText");
    const $select1Inputs = $("select.select1");
    const $select2Inputs = $("select.select2");
    const $sampleNumberInput = $('#sampleNumberInput');

    sampleNumberUpdateEvent();

    $nextPage.addClass('not-allowed');

    $checkboxes.on('change', checkBoxEvent);

    $nextPage.click(function () {
        if ($magnCheckbox.is(':checked') && $pm1Checkbox.is(':checked') && $pm2Checkbox.is(':checked')) {
            window.location.href = "/third";
        }
    });
});

function setElementEnabled($elements, count) {
    $elements.each(function (i, obj) {
        if (i < count) {
            $(obj).removeAttr('disabled');
        } else {
            $(obj).attr('disabled', 'disabled');
        }
    });
}

function checkBoxEvent() {
    const $nextPage = $('.nextPage');
    const $magnCheckbox = $('#magn');
    const $pm1Checkbox = $('#pm1');
    const $pm2Checkbox = $('#pm2');

    if ($magnCheckbox.is(':checked') && $pm1Checkbox.is(':checked') && $pm2Checkbox.is(':checked')) {
        $nextPage.addClass('allowed').removeClass('not-allowed');
    } else {
        $nextPage.addClass('not-allowed').removeClass('allowed');
    }
}

function sampleNumberUpdateEvent() {
    const $sampleNumberInput = $('#sampleNumberInput');
    const count = $sampleNumberInput.val();

    setElementEnabled($customTextInputs, count);
    setElementEnabled($select1Inputs, count);
    setElementEnabled($select2Inputs, count);

    $sampleNumberInput.change(function () {
        const count = $sampleNumberInput.val();
        setElementEnabled($customTextInputs, count);
        setElementEnabled($select1Inputs, count);
        setElementEnabled($select2Inputs, count);
    });
}