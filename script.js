// 修改这里为你们的在一起日期！格式：年, 月-1, 日（比如2024年5月20日就是 2024,4,20）
const startDate = new Date(2024, 4, 20);

// 计算相差的天数
function calculateDays() {
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById('days').textContent = diffDays;
}

// 页面加载时计算，并且每秒更新
calculateDays();
setInterval(calculateDays, 1000);