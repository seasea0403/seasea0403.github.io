/**
 * 公共时间工具函数
 * 1. 计算两个日期之间的差值（天/时/分/秒）
 * 2. 格式化日期显示
 * 3. 计算倒计时
 */

// 格式化日期为 "YYYY-MM-DD" 格式
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 计算两个日期之间的时间差（返回天/时/分/秒）
function calculateDateDiff(startDate, endDate = new Date()) {
    // 转成时间戳（毫秒）
    const start = new Date(startDate).getTime();
    const end = endDate.getTime();
    
    // 计算差值（秒）
    const diffSeconds = Math.floor((end - start) / 1000);
    
    // 转换为天/时/分/秒
    const days = Math.floor(diffSeconds / (24 * 3600));
    const hours = Math.floor((diffSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;
    
    return {
        totalDays: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        fullStr: `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`
    };
}

// 计算距离目标日期的倒计时（返回天/时/分/秒）
function calculateCountdown(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    
    // 如果目标日期已过，计算下一年的
    if (target < now) {
        target.setFullYear(now.getFullYear() + 1);
    }
    
    const diff = target.getTime() - now.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    
    const days = Math.floor(diffSeconds / (24 * 3600));
    const hours = Math.floor((diffSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((diffSeconds % 3600) / 60);
    const seconds = diffSeconds % 60;
    
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        fullStr: `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`
    };
}