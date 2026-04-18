# 📱 Simple Auth App (React Native - Expo)

Aplikasi mobile sederhana menggunakan **React Native (Expo Router)** yang memiliki fitur:

- 🔐 Login
- 📝 Register
- 👋 Welcome Screen (Home)
- 💾 Penyimpanan data menggunakan AsyncStorage

---

## 🚀 Fitur Utama

### 🔑 Login

- Validasi email (RegEx)
- Validasi password
- Hanya user yang sudah register yang bisa login

### 📝 Register

- Input:
  - Nama
  - Email
  - Phone
  - Password
  - Confirm Password
- Validasi:
  - Email format valid
  - Phone hanya angka & minimal 10 digit
  - Password minimal 6 karakter
  - Confirm password harus sama

### 🏠 Home

- Menampilkan:
- Data dikirim melalui **router params**

---

## 🛡️ Security Logic

- Email validation menggunakan RegEx
- Phone validation (numeric only)
- Password confirmation check
- Data disimpan secara lokal menggunakan **AsyncStorage**

---

## 📸 Capture Running Program

### 🔹 Register Screen

![Register](https://i.imgur.com/ujbdfIx.jpeg)

### 🔹 Login Screen

![Login](https://i.imgur.com/QyDPeyH.jpeg)

### 🔹 Home Screen

![Home](https://i.imgur.com/PJ6P5Zk.jpeg)

> 

---

## 🎥 (Optional) GIF Demo

(to be added)

---

## 🌐 Expo Snack (Live Demo)

👉 Klik link di bawah untuk mencoba tanpa install:

🔗 https://snack.expo.dev/@ariq_lll/pertemuan5

> 

---

## ⚙️ Teknologi yang Digunakan

- React Native
- Expo Router
- AsyncStorage

---

## 📂 Struktur Project

app/
├── \_layout.tsx
├── index.jsx // Login
├── register.jsx // Register
└── home.jsx // Home

---

## 🧪 Dummy Account (Testing)

Email : qira123@gmail.com

Password : 123456

---

## 📌 Cara Menjalankan

```bash
npm install
npx expo start
```
