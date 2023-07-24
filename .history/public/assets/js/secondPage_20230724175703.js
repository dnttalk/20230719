document.addEventListener("DOMContentLoaded", function () {
    const sampleNumberInput = document.getElementById("sampleNumberInput");
    const sampleNumberDisplay = document.getElementById("sampleNumberDisplay");

    sampleNumberInput.addEventListener("input", function () {
        const sampleNumber = parseInt(sampleNumberInput.value);
        const isValidNumber = sampleNumber >= 1 && sampleNumber <= 24;

        sampleNumberDisplay.textContent = isValidNumber ? `Sample Number: ${sampleNumber}` : "Invalid Input";
    });
});