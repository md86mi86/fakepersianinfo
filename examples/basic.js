// ایمپورت کلاس FakePersianInfo از مسیر src
import FakePersianInfo from "../src/FakePersianInfo.js";

// ایجاد یک نمونه از کلاس FakePersianInfo
const fakeInfo = new FakePersianInfo();

// تابع async برای دریافت اطلاعات کامل یک زن به صورت تصادفی
async function showFemaleInfo() {
  try {
    // فراخوانی متد getFemaleFullInfo برای دریافت اطلاعات
    const data = await fakeInfo.getFemaleFullInfo();
    // نمایش اطلاعات در کنسول به صورت فرمت شده (زیبا)
    console.log("اطلاعات کامل یک زن به صورت تصادفی:", JSON.stringify(data, null, 2));
  } catch (err) {
    // در صورت بروز خطا، نمایش پیام خطا در کنسول
    console.error("خطا در دریافت اطلاعات:", err);
  }
}

// اجرای تابع برای نمایش اطلاعات
showFemaleInfo();