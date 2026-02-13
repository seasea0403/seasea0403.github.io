import os
import shutil

# ===================== 配置区（只需改这里！）=====================
# 1. 城市列表：key=前端用的城市英文名，value=中文名称（用于日志提示）
cities = {
    "sanya": "三亚",
    "tianjin": "天津",
    "dalian": "大连",
    "changsha": "长沙",
    "wuhan": "武汉",
    "xishuangbanna": "西双版纳",
    "kunming": "昆明",
    "zhengzhou": "郑州",
    "suixian": "睢县",
    "shanghai": "上海",
    "hangzhou": "杭州"
}

# 2. 照片根文件夹路径（不用改，和你的项目结构对应）
root_photo_folder = "images/travel/"

# 3. 支持的照片格式（不用改，自动识别）
supported_formats = [".jpg", ".jpeg", ".png", ".webp"]
# ================================================================

def batch_rename_photos():
    """批量重命名旅行照片：城市英文名_序号.后缀"""
    print("🚀 开始批量重命名旅行照片...\n")
    
    # 遍历每个城市文件夹
    for city_en, city_cn in cities.items():
        # 拼接城市文件夹路径
        city_folder = os.path.join(root_photo_folder, city_en)
        
        # 检查文件夹是否存在
        if not os.path.exists(city_folder):
            print(f"⚠️  跳过：{city_cn} 文件夹不存在 → {city_folder}")
            continue
        
        # 获取文件夹内所有照片文件
        photo_files = []
        for file in os.listdir(city_folder):
            # 过滤非照片文件
            file_ext = os.path.splitext(file)[1].lower()
            if file_ext in supported_formats:
                photo_files.append(file)
        
        # 无照片则跳过
        if not photo_files:
            print(f"⚠️  跳过：{city_cn} 文件夹内无照片")
            continue
        
        # 按文件修改时间排序（保证顺序是拍照/保存的先后）
        photo_files.sort(key=lambda x: os.path.getmtime(os.path.join(city_folder, x)))
        
        # 批量重命名
        rename_count = 0
        for idx, old_file in enumerate(photo_files, start=1):
            # 拆分原文件名和后缀
            old_path = os.path.join(city_folder, old_file)
            file_ext = os.path.splitext(old_file)[1].lower()
            
            # 新文件名：城市英文名_序号.后缀（比如 sanya_1.jpg）
            new_file = f"{city_en}_{idx}{file_ext}"
            new_path = os.path.join(city_folder, new_file)
            
        
            # 执行重命名
            os.rename(old_path, new_path)
            rename_count += 1
            print(f"✅ {city_cn}：{old_file} → {new_file}")
        
        print(f"✅ {city_cn} 重命名完成，共处理 {rename_count} 张照片\n")
    
    print("🎉 所有城市照片重命名完成！")

if __name__ == "__main__":
    batch_rename_photos()