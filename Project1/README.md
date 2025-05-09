# 🚀 JavaScript & TypeScript Programs  

This project contains **JavaScript & TypeScript** implementations of common mathematical and string operations.  
Each language has its own approach—**TypeScript** brings type safety, while **JavaScript** keeps things dynamic!  

---

## 📂 Files  
- 📌 `Javascript.js` → JavaScript version  
- 📌 `Typescript.ts` → TypeScript version  

---

# ✨ Features & Programs  

Each program solves a specific problem using **JavaScript & TypeScript**.

### 1️⃣ **Case 1: Luas Persegi**  
📌 **Formula:** `Area = length × width`  
✅ **Input:** `length = 5`, `width = 3`  
🎯 **Output:** `15`  

---

### 2️⃣ **Case 2: Diameter, Keliling dan Luas Lingkaran**  
📌 **Formulas:**
   - **Diameter:** `d = 2 × radius`
   - **Circumference:** `C = 2 × π × radius`
   - **Area:** `A = π × radius²`

✅ **Input:** `radius = 5`  
🎯 **Output:**
   - `Diameter = 10`
   - `Circumference = 31.4159`
   - `Area = 78.539`  

---

### 3️⃣ **Sudut ke-3 Segitiga**  
📌 **Formula:** `Angle3 = 180° - (Angle1 + Angle2)`  
✅ **Input:** `Angle1 = 80`, `Angle2 = 65`  
🎯 **Output:** `35`  

---

### 4️⃣ **Case 4: Selisih Tanggal dalam Hari**  
📌 **Formula:** `Days = |Date2 - Date1|`  
✅ **Input:** `date1 = "2024-03-19"`, `date2 = "2024-03-21"`  
🎯 **Output:** `2`  

---

### 5️⃣ **Case 5: Memberikan Inisial dalam Kapital**  
📌 **Logic:** Take the first letter of each word and convert it to uppercase.  
✅ **Input:** `"John Doe"`  
🎯 **Output:** `"JD"`  

---

# ⚠️ **Issue Encountered**  

## 🛑 **The Unexpected Output Problem**  
When I was coding for Case 2: Diameter, Keliling dan Luas Lingkaran, I encountered an issue when returning the output as shown below:  

```js
function circleProperties(radius) {
    return {
        diameter: 2 * radius,
        circumference: 2 * Math.PI * radius,
        area: Math.PI * radius * radius
    };
}
console.log(circleProperties(5));
```
I expect a clean, readable output like this:

```js
{ diameter: 10, circumference: 31.4159, area: 78.539 }
```
But instead, when i run the code in some environments (especially browsers), extra prototype details appear, making the output look messy.

❓ Why Does This Happen?
In JavaScript, objects inherit from the prototype chain. When you log an object using console.log(object), some environments may display not just your own properties, but also inherited prototype properties.

This is because JavaScript treats objects as more than just data holders—they come with built-in methods and properties that can unintentionally clutter the output.

✅ The Clean Output Solution
To avoid this, instead of returning an object, i log each value separately like this:

```js
function circleProperties(radius) {
    let diameter = 2 * radius;
    let circumference = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;

    console.log("Diameter:", diameter);
    console.log("Circumference:", circumference.toFixed(4)); // Rounded for readability
    console.log("Area:", area.toFixed(3));
}
circleProperties(5);
```

Now, the output is clean and structured:

```
Diameter: 10  
Circumference: 31.4159  
Area: 78.539  
```
No more unexpected prototype scraps! 🎉

## 🛠 **How to Run the Code**

▶️ JavaScript
Open Javascript.js in a terminal
Run:
```sh
node Javascript.js
```
▶️ TypeScript
Compile:
```sh
tsc Typescript.ts
```
Run the generated JavaScript file:
```sh
node Typescript.js
```
