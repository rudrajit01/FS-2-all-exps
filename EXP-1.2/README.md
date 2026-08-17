# 📱 Social Media Post Composer

A high-performance React application built with **Redux Toolkit** and **Reselect** that demonstrates efficient state management, memoized selectors, and a modern, premium UI with real-time language switching (Bangla/English).

---

## ✨ Features

- ✅ **Post Listing** – Display a list of social media posts with categories (React, Redux, JavaScript).
- ✅ **Category Filtering** – Filter posts by category using a dropdown.
- ✅ **Memoized Selectors** – Uses `createSelector` from Reselect to cache filtered results and prevent unnecessary calculations.
- ✅ **Optimized Rendering** – `React.memo` prevents re-rendering of individual post cards when the filtered list changes but the post data stays the same.
- ✅ **Language Toggle** – Seamlessly switch between Bangla (বাংলা) and English. All UI text and post content update instantly.
- ✅ **Premium UI/UX** – Glassmorphism design, gradient accents, hover animations, and category-based color-coded borders.
- ✅ **Modular Redux Architecture** – Clean separation of slices, selectors, and components for scalability.

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend UI library |
| **Redux Toolkit** | State management (store, slices, actions) |
| **React Redux** | Bindings to connect React with Redux |
| **Reselect** | Memoized selectors for derived state |
| **CSS3** | Custom premium styling with glassmorphism |
| **JavaScript (ES6)** | Modern syntax and functional patterns |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rudrajit01/Social-Media-Post-Composer.git
Navigate into the project folder

bash
cd Social-Media-Post-Composer
Install dependencies

bash
npm install
Start the development server

bash
npm start
Open http://localhost:3000 to view it in your browser.

📂 Project Structure
text
Social-Media-Post-Composer/
├── public/
│   └── index.html
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── store.js
│   ├── postsSlice.js
│   ├── languageSlice.js
│   ├── translations.js
│   ├── selectors.js
│   ├── Filter.js
│   └── PostsList.js
├── package.json
├── package-lock.json
└── README.md
🧠 How Memoized Selectors Work
The selectFilteredPosts selector is created using createSelector from Reselect. It takes selectPosts (derived from the current language), selectFilter, and selectLanguage as inputs.

First call → computes the filtered list and caches the result.

Subsequent calls with the same filter & language → returns the cached result instantly.

Only when filter or language changes → recomputes the filtered list.

A console.log inside the selector proves this optimization in action.

#  🌐 Language Toggle
The app supports two languages:

বাংলা (Bangla) – default

English

Click the button in the top-right to switch. All UI labels, headings, and post titles/content change accordingly.

🎨 UI Highlights
Glassmorphism – Frosted glass effect with backdrop blur.

Gradient Text – Purple-to-indigo gradient on the app title.

Animated Buttons – Smooth hover scaling and shadow transitions.

Color-coded Posts – Each category has its own border color:

React → Blue

Redux → Purple

JavaScript → Amber

Responsive – Works well on desktop and mobile screens.

📦 Dependencies
json
"dependencies": {
  "@reduxjs/toolkit": "^1.9.7",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-redux": "^8.1.3",
  "reselect": "^4.1.8"
}
📚 Learning Outcomes
This project demonstrates:

How to use Redux Toolkit to manage application state.

How to create memoized selectors with Reselect to optimize performance.

How to avoid unnecessary re-renders using React.memo.

How to build reusable, modular React components.

How to structure a scalable Redux architecture.

How to implement a language toggle without reloading the page.

👨‍💻 Author
Rudrajit
GitHub: @rudrajit01
