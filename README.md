# 🚀 Growth Marketing 30 Days – Learning Dashboard & IVIE Case Study

Website cá nhân phục vụ lộ trình học tập 30 ngày chuyển đổi từ **Brand & Communication** sang **Growth Marketing**, xây dựng Case Study thực chiến cho sản phẩm **IVIE – Bác sĩ ơi** của Ngô Ngọc Lâm.

---

## 📦 Hướng Dẫn Deploy Lên Vercel (Cực Kỳ Nhanh Chóng & Miễn Phí)

Dự án đã được cấu hình sẵn file `vercel.json` tối ưu hóa cho Vite + React 19 SPA (tự động điều hướng routes, cache assets tối đa).

### Cách 1: Deploy qua GitHub (Khuyên dùng - Cập nhật tự động mỗi khi push code)

1. **Khởi tạo Git và đẩy code lên GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: init 30 days growth marketing platform"
   git branch -M main
   git remote add origin https://github.com/<tai-khoan-cua-ban>/<ten-repo>.git
   git push -u origin main
   ```

2. **Kết nối với Vercel:**
   - Truy cập: [https://vercel.com](https://vercel.com) và đăng nhập (bằng tài khoản GitHub).
   - Bấm **"Add New..."** → chọn **"Project"**.
   - Tìm và chọn repository vừa đẩy lên.
   - Vercel sẽ tự động nhận diện:
     - **Framework Preset:** Vite
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Bấm **"Deploy"**. Trong vòng 30-45 giây, website của bạn sẽ online với tên miền miễn phí dạng `ten-du-an.vercel.app`!

---

### Cách 2: Deploy trực tiếp bằng Vercel CLI (Từ Terminal máy tính)

1. Mở Terminal tại thư mục dự án và chạy:
   ```bash
   npm i -g vercel
   vercel
   ```
2. Đăng nhập theo hướng dẫn trên terminal.
3. Chọn các câu hỏi mặc định bằng cách nhấn `Enter`:
   - `Set up and deploy?` → `Y`
   - `Which scope?` → Chọn tài khoản cá nhân của bạn
   - `Link to existing project?` → `N`
   - `What's your project's name?` → `growth-marketing-30d` (hoặc tùy chọn)
   - `In which directory is your code located?` → `./`
   - Vercel tự động build và xuất ra production URL ngay lập tức!

4. Để deploy phiên bản chính thức (Production):
   ```bash
   vercel --prod
   ```

---

## 🛠️ Chạy Local trên máy tính

```bash
# Cài đặt thư viện
npm install

# Khởi chạy server phát triển
npm run dev

# Kiểm tra build production
npm run build
```
