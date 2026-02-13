// 首页核心逻辑：计时器 + 纪念日
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. 配置核心日期（你需要修改这里的日期！） ==========
    const LOVE_START_DATE = '2023-05-20'; // 你们在一起的日期（YYYY-MM-DD）
    const MEET_DATE = '2023-04-15'; // 你们相识的日期（YYYY-MM-DD）
    
    // 纪念日配置（可自行添加/修改）
    const MEMORIAL_LIST = [
        { name: '在一起纪念日', date: LOVE_START_DATE },
        { name: '相识纪念日', date: MEET_DATE },
        { name: '你的生日', date: '1999-10-01' }, // 替换成实际生日
        { name: 'TA的生日', date: '2000-02-14' }, // 替换成实际生日
        { name: '情人节', date: '2026-02-14' },
        { name: '520', date: '2026-05-20' }
    ];
    
    // 小数据配置（可自行修改数值）
    const COUPLE_DATA = [
        { name: '见面次数', value: 52 },
        { name: '旅行城市', value: 8 },
        { name: '一起看的电影', value: 24 },
        { name: '互送礼物', value: 36 }
    ];

    // ========== 2. 初始化在一起时长计时器 ==========
    function initTimer() {
        const loveTimerEl = document.getElementById('love-timer');
        const meetTimerEl = document.getElementById('meet-timer');
        
        // 更新计时器
        function updateTimer() {
            // 在一起时长
            const loveDiff = calculateDateDiff(LOVE_START_DATE);
            loveTimerEl.textContent = loveDiff.fullStr;
            
            // 相识时长
            const meetDiff = calculateDateDiff(MEET_DATE);
            meetTimerEl.textContent = meetDiff.fullStr;
        }
        
        // 初始化更新一次
        updateTimer();
        // 每秒更新一次
        setInterval(updateTimer, 1000);
    }

    // ========== 3. 初始化纪念日列表 ==========
    function initMemorialList() {
        const memorialListEl = document.getElementById('memorial-list');
        memorialListEl.innerHTML = '';
        
        MEMORIAL_LIST.forEach(item => {
            // 计算倒计时
            const countdown = calculateCountdown(item.date);
            
            // 创建纪念日项
            const itemEl = document.createElement('div');
            itemEl.className = 'memorial-item card';
            itemEl.innerHTML = `
                <div class="memorial-name">${item.name}</div>
                <div class="memorial-date">日期：${item.date}</div>
                <div class="memorial-countdown">倒计时：${countdown.fullStr}</div>
            `;
            
            memorialListEl.appendChild(itemEl);
        });
        
        // 每秒更新倒计时
        setInterval(() => {
            initMemorialList();
        }, 1000);
    }

    // ========== 4. 初始化小数据模块 ==========
    function initCoupleData() {
        const dataListEl = document.getElementById('data-list');
        dataListEl.innerHTML = '';
        
        COUPLE_DATA.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'data-item card';
            itemEl.innerHTML = `
                <div class="data-value">${item.value}</div>
                <div class="data-name">${item.name}</div>
            `;
            
            dataListEl.appendChild(itemEl);
        });
    }

    // ========== 初始化所有模块 ==========
    initTimer();
    initMemorialList();
    initCoupleData();
});