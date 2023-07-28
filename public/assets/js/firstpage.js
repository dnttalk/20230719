document.addEventListener("DOMContentLoaded", function () {
    const pcrBtn = document.getElementById("pcrBtn");
    let isUnloading = true;
    let toggleCounter = 0;
    let isAnimating = false;
    let originalText = pcrBtn.textContent;

    function toggleButton() {
        if (toggleCounter < 5) {
            isUnloading = !isUnloading;
            toggleCounter++;
            setTimeout(toggleButton, 300); // 設定 300 毫秒的閃爍間隔，你可以根據需要調整時間間隔
        } else {
            toggleCounter = 0;
            isAnimating = false;
            pcrBtn.textContent = isUnloading ? "PCR unload" : "PCR load"; // 閃爍完成後才變更文本
        }
    }

    pcrBtn.addEventListener("click", function () {
        // 點擊按鈕時啟動閃爍效果
        if (!isAnimating) {
            isAnimating = true;
            toggleButton();
        }
    });
});