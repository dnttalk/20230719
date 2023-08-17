// 初始狀態為 0，表示 "PCR open"
let status = 0;
const statusArr = ['PCR open', 'PCR opening', 'PCR close', 'PCR closing'];
const $pcrBtn = $('#pcrBtn'); // 快取按鈕元素

$(function () {
    btnAnimation();
});

// 切換狀態並處理相應事件
async function statusEvent() {
    status = (status + 1) % 4;
    $pcrBtn.text(statusArr[status]);

    if (statusArr[status] === 'PCR opening') {
        try {
            const response = await $.get("/api/pcrlib/open");
            console.log(response);
        } catch (error) {
            console.error("開啟 PCR 時發生錯誤:", error);
        }
    }

    if (statusArr[status] === 'PCR closing') {
        try {
            const response = await $.get("/api/pcrlib/close");
            console.log(response);
        } catch (error) {
            console.error("關閉 PCR 時發生錯誤:", error);
        }
    }
}

// 處理按鈕點擊事件和動畫
function btnAnimation() {
    $pcrBtn.on('click', async function () {
        statusEvent();
        $pcrBtn.prop('disabled', true);

        for (let count = 0; count < 5; count++) {
            await fadeAnimation($pcrBtn, 500);
        }

        statusEvent();
        $pcrBtn.prop('disabled', false);
    });
}

// 淡入淡出動畫
function fadeAnimation($element, duration) {
    return new Promise((resolve) => {
        $element.fadeOut(duration, () => {
            $element.fadeIn(duration, resolve);
        });
    });
}

// 項目選擇按鈕相關操作
const projectButton = document.getElementById('projectButton');
const projectOptionButtons = document.querySelectorAll('.projectOptionButton');
const popup = document.getElementById('popup');
const additionalButton = document.getElementById('additionalButton');

// 點擊專案選擇按鈕時，顯示選項彈出框
projectButton.addEventListener('click', () => {
    popup.style.display = 'block';
});

// 選擇特定專案時的操作
projectOptionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedProject = button.getAttribute('data-project');
        projectButton.textContent = selectedProject;
        popup.style.display = 'none';
        additionalButton.removeAttribute('disabled');
    });
});

// 點擊進行下一步操作
additionalButton.addEventListener('click', () => {
    const selectedProject = projectButton.textContent;
    window.location.href = `http://localhost:3000/second?id=${selectedProject}`;
});