````markdown
# Fake Persian Info

## English Version

Fake Persian Info is a simple JavaScript library for generating random Persian (Farsi) fake user data, including first names, last names, and full profiles separated by gender.

### Features

- Generate random Persian first names, last names, and full info
- Filter by gender (male/female)
- Easy to use with async functions
- Lightweight and no dependencies

### Installation

```bash
npm install fakepersianinfo
````

### Usage

```js
import FakePersianInfo from "fakepersianinfo";

const fakeInfo = new FakePersianInfo();

async function showFemaleInfo() {
  try {
    const data = await fakeInfo.getFemaleFullInfo();
    console.log("Random female info:", data);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
}

showFemaleInfo();
```

### License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

---

## نسخه فارسی

Fake Persian Info یک کتابخانه ساده جاوااسکریپت برای تولید اطلاعات جعلی تصادفی فارسی شامل نام کوچک، نام خانوادگی و اطلاعات کامل به تفکیک جنسیت است.

### ویژگی‌ها

* تولید نام کوچک، نام خانوادگی و اطلاعات کامل تصادفی
* فیلتر کردن بر اساس جنسیت (مرد/زن)
* استفاده آسان با توابع async
* سبک و بدون وابستگی

### نصب

```bash
npm install fakepersianinfo
```

### استفاده

```js
import FakePersianInfo from "fakepersianinfo";

const fakeInfo = new FakePersianInfo();

async function showFemaleInfo() {
  try {
    const data = await fakeInfo.getFemaleFullInfo();
    console.log("اطلاعات تصادفی یک زن:", data);
  } catch (err) {
    console.error("خطا در دریافت اطلاعات:", err);
  }
}

showFemaleInfo();
```

### مجوز

این پروژه با مجوز MIT منتشر شده است - لطفاً برای جزئیات فایل [LICENSE](./LICENSE) را ببینید.

---

**برای مشاهده نسخه انگلیسی این فایل به بالا مراجعه کنید.**
**For the English version of this README, please see above.**

---

**Author:** Mohammad Maleki
**Email:** [mohammad2007maleki@gmail.com](mailto:mohammad2007maleki@gmail.com)
**GitHub:** [md86mi86](https://github.com/md86mi86)

```
```
