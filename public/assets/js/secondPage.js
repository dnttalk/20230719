const sampleNumberInput = document.getElementById("sampleNumberInput");
const sampleNameInputs = document.querySelectorAll(".sample-name");
const indexNameInputs = document.querySelectorAll(".index-name");

sampleNumberInput.addEventListener("input", function () {
    const sampleNumber = parseInt(sampleNumberInput.value);
    const maxSampleNumber = parseInt(sampleNumberInput.getAttribute("max"));

    if (
        isNaN(sampleNumber) ||
        sampleNumber < 1 ||
        sampleNumber > maxSampleNumber
    ) {
        sampleNumberInput.value = "";
        return;
    }

    // Disable excess sample name inputs
    sampleNameInputs.forEach(function (input, index) {
        if (index >= sampleNumber) {
            input.value = "";
            input.disabled = true;
            input.classList.add("disabled");
        } else {
            input.disabled = false;
            input.classList.remove("disabled");
        }
    });

    // Disable excess index name inputs
    indexNameInputs.forEach(function (input, index) {
        if (index >= sampleNumber) {
            input.value = "";
            input.disabled = true;
            input.classList.add("disabled");
        } else {
            input.disabled = false;
            input.classList.remove("disabled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sampleNumberInput = document.getElementById("sampleNumberInput");
    const sampleNameInputs = document.querySelectorAll(".sample-name-input");

    sampleNumberInput.addEventListener("input", function (event) {
        const sampleNumber = parseInt(event.target.value);

        // Disable extra sample name inputs
        sampleNameInputs.forEach((input, index) => {
            if (index >= sampleNumber) {
                input.value = "";
                input.disabled = true;
                input.classList.add("disabled-input");
            } else {
                input.disabled = false;
                input.classList.remove("disabled-input");
            }
        });
    });
});