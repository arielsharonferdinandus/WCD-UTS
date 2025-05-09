
# workoutaja Landing Page – CSS Enhancement

This project includes a refined CSS file to match the landing page design for the "workoutaja" website, as in the Figma. Below is a breakdown of changes and explanations.

---

## 🎨 Background Gradient

```css
body {
  background: linear-gradient(180deg, rgba(227, 255, 248, 0) 82.08%, rgba(227, 255, 248, 0.38) 100%);
  min-height: 100vh;
  font-family: 'Mulish', sans-serif;
}
```

**Matches the soft gradient background seen in the design.**

---

## 📦 Page Container

```css
.page {
  width: 1040px;
  margin: 0 auto;
  padding-top: 64px;
}
```

**Centers the page and aligns content with the mockup's layout.**

---

## 🧭 Navigation Bar

```css
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  display: flex;
  gap: 48px;
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  color: #4F4F4F;
  font-weight: 600;
  transition: color 0.3s;
}

nav ul li a:hover {
  color: #000;
}
```

**Creates a clean and responsive navigation menu, using soft grey with hover effect to bold black.**

---

## 💪 Main Section Layout

```css
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 88px;
}
```

**Aligns the illustration and text side-by-side with spacing that matches the design.**

---

## 📝 Text Block Styling

```css
.text h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
}

.text h1 span {
  color: #6FCF97;
}

.text p {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  color: #4F4F4F;
  margin-top: 12px;
  line-height: 1.6;
}
```

**Applies bold heading and highlighted green "EXCLUSIVE", along with clear paragraph styling.**

---

## ✅ Call-to-Action Button

```css
.text button {
  margin-top: 24px;
  display: flex;
  align-items: center;
  background: #6FCF97;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Open Sans', sans-serif;
  cursor: pointer;
  transition: background 0.3s;
}

.text button:hover {
  background: #57A578;
}
```

**Matches the rounded button with WhatsApp icon and hover effect to indicate interactivity.**

---

## 📎 Footer Styling (Including @workoutaja emphasis)

```css
footer {
  text-align: center;
  padding: 16px 0;
  font-size: 1rem;
  font-weight: 700;
}

footer a {
  color: #000;
  font-weight: 900;
  font-size: 1rem;
  text-decoration: none;
}

footer a:hover {
  text-decoration: underline;
}
```

**Makes `@workoutaja` more visually dominant with bold weight and underline on hover.**

---

## 🔵 Decoration

```css
#balls {
  position: fixed;
  bottom: 0px;
  right: 0px;
}
```

**Positions decorative elements like floating dots at the bottom right, just like the design.**

---

## 📁 How to Use

1. Link the CSS file in your HTML:
   ```html
   <link rel="stylesheet" href="style.css">
   ```

2. Use the provided HTML structure or adapt your own to match the layout.

3. Ensure fonts `Mulish` and `Open Sans` are loaded via Google Fonts or locally.

---

## 📸 Design Reference

Design based on a visual mockup displaying a modern fitness brand homepage from Figma.
