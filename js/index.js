// 首页核心逻辑：计时器 + 纪念日
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. 配置核心日期（你需要修改这里的日期！） ==========
    const LOVE_START_DATE = '2023-10-28'; // 你们在一起的日期（YYYY-MM-DD）

   // ========== 2. 初始化在一起时长计时器 ==========
    function initTimer() {
        const loveTimerEl = document.getElementById('love-timer');
        
        // 更新计时器（只显示天数）
        function updateTimer() {
            // 在一起时长：只取天数
            const loveDiff = calculateDateDiff(LOVE_START_DATE);
            loveTimerEl.textContent = `我们相恋已经 ${loveDiff.totalDays} 天了！`;
        }
        
        // 初始化更新一次
        updateTimer();
        // 每分钟更新一次（不用每秒，减少性能消耗）
        setInterval(updateTimer, 600000);
    }


    initTimer();
});