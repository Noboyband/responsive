# วิธีเชื่อมต่อฐานข้อมูลผลโหวตรวม (Firebase)

ทำครั้งเดียว ใช้เวลาประมาณ 5 นาที ฟรี ไม่ต้องเขียนโค้ด

## ขั้นตอน

1. เข้า https://console.firebase.google.com แล้วล็อกอินด้วยบัญชี Google
2. กด **Add project** (สร้างโปรเจกต์) → ตั้งชื่ออะไรก็ได้ เช่น `worldcup-vote` → ปิด Google Analytics ก็ได้ → **Create project**
3. เมนูซ้าย **Build → Realtime Database** → กด **Create Database**
   - เลือก location: **Singapore (asia-southeast1)**
   - เลือก **Start in locked mode** → Enable
4. ไปที่แท็บ **Rules** ของ Realtime Database → ลบของเดิม แล้ววางเนื้อหาจากไฟล์
   [`firebase-rules.json`](./firebase-rules.json) ทั้งหมด → กด **Publish**

   กติกานี้ทำให้: ทุกคนอ่านผลโหวตได้ / 1 ชื่อโหวตได้ครั้งเดียว / แก้หรือลบไม่ได้ /
   ข้อมูลอื่นนอกจากคำโหวตเขียนไม่ได้
5. กดไอคอนเฟือง ⚙️ (Project settings) → แท็บ **General** → เลื่อนลงหา **Your apps**
   → กดไอคอน **`</>`** (Web) → ตั้งชื่อ app → **Register app**
6. จะเห็นโค้ด `const firebaseConfig = { ... }` — คัดลอกค่าในวงเล็บปีกกามาส่งให้ Claude
   (หรือวางเองในไฟล์ `worldcup-prediction.html` ตรงตัวแปร `FIREBASE_CONFIG`)

ค่าที่ต้องใช้จริงมีแค่ `apiKey`, `databaseURL`, `projectId`
(ถ้าไม่เห็น `databaseURL` ให้คัดลอก URL จากหน้า Realtime Database เช่น
`https://worldcup-vote-default-rtdb.asia-southeast1.firebasedatabase.app`)

## การกันโหวตซ้ำ

- **1 ชื่อ = 1 โหวต**: บังคับที่เซิร์ฟเวอร์ (Rules) — ชื่อซ้ำ (ไม่สนตัวพิมพ์เล็กใหญ่/ช่องว่าง) เขียนทับไม่ได้
- **1 เครื่อง = 1 โหวต**: หลังโหวตแล้ว ฟอร์มบนเครื่องนั้นจะล็อก (เก็บใน localStorage)
- ลบคำโหวตได้จากหน้า Firebase Console เท่านั้น (เจ้าของโปรเจกต์)
