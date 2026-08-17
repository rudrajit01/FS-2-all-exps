# 📅 Experiment 1.4 - Optimized Calendar with Post Scheduler

> **Full-Stack 2 (24CSP-337)** | **Semester:** 5th | **Section:** 24BCY-2(B)NTPP  
> **Student:** Rudrajit Pramanik | **UID:** 24BCY70262 | **Branch:** B.E. CSE (Cyber Security)  
> **Date of Performance:** 20/07/2026

---

## 🎯 Aim

To design and implement an interactive calendar interface for scheduling posts with optimized rendering performance and robust testing strategies.

---

## 📋 Objectives

- Display an interactive 31‑day calendar with day selection
- Optimize rendering using `React.memo`, `useMemo`, and `useCallback`
- Implement post scheduling with Redux state management
- Enable drag‑and‑drop and resize interactions using FullCalendar
- Support **Day**, **Week**, and **Month** views
- Write unit tests for UI components using Jest & React Testing Library

---

## 🧰 Technologies Used

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library |
| **Redux Toolkit** | State management for posts |
| **FullCalendar v5** | Interactive calendar with drag‑and‑drop |
| **React.memo / useMemo / useCallback** | Performance optimization |
| **Jest + React Testing Library** | Unit testing |
| **CSS3** | Styling |
| **Git & GitHub** | Version control |

---

## ✨ Features

### 🔹 Optimized Calendar (Experiment 1.4 – Part 1)
- 31‑day grid layout for July 2026
- Click to select/highlight any day
- Performance optimizations:
  - `React.memo` prevents unnecessary re‑renders of individual day cells
  - `useMemo` caches expensive date calculations
  - `useCallback` provides stable function references
- Clean, responsive UI

### 🔹 Post Scheduler (New Feature – Part 2)
- FullCalendar integration with **Month**, **Week**, and **Day** views
- Pre‑loaded demo posts mapped to dates and times
- **Drag & Drop** – move posts to different dates/times
- **Resize** – adjust event duration
- **Click** on an event to view details and delete
- **Add Demo Post** button to create new posts
- Redux manages all post data (add, update, delete)

---

## 📂 Project Structure
fsd2_exp_1.4/
├── public/
│ └── index.html # CDN link for FullCalendar CSS
├── src/
│ ├── components/
│ │ ├── Calendar.js # Optimized calendar (React.memo)
│ │ ├── Calendar.css
│ │ ├── Day.js # Individual day cell
│ │ ├── Day.css
│ │ ├── PostScheduler.jsx # FullCalendar with Redux
│ │ └── PostScheduler.css
│ ├── hooks/
│ │ └── useCalendar.js # Custom hook with useMemo/useCallback
│ ├── store/
│ │ ├── index.js # Redux store configuration
│ │ └── postsSlice.js # Posts reducer & actions
│ ├── tests/
│ │ ├── Calendar.test.js
│ │ └── Day.test.js
│ ├── App.js # Main app with tab switching
│ ├── App.css
│ └── index.js
├── package.json
└── README.md

text

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

### Installation

```bash
# Clone the repository (or navigate to this folder)
git clone https://github.com/rudrajit01/FS-2-all-exps.git
cd FS-2-all-exps/fsd2_exp_1.4

# Install dependencies
npm install --legacy-peer-deps
Running the App
bash
npm start
The app will open at http://localhost:3000.

Running Tests
bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage
Building for Production
bash
npm run build
🧪 Testing
Calendar Component Tests – verifies rendering, day selection, and clear functionality.

Day Component Tests – checks click events, selected/ weekend states, and accessibility.

All tests are written with Jest and React Testing Library.

📸 Screenshots
(Add your own screenshots here to showcase the calendar and scheduler)

Example:
https://screenshots/calendar.png
https://screenshots/scheduler.png

📚 Learning Outcomes
Understand React rendering lifecycle

Identify performance bottlenecks in UI

Optimize rendering using React.memo

Use useMemo for expensive computations

Use useCallback for stable function references

Reduce unnecessary component re‑renders

Build reusable React components

Perform component testing using Jest

Integrate third‑party libraries (FullCalendar)

Manage application state with Redux Toolkit

Implement drag‑and‑drop and event resizing

Improve user experience for content planning

🤝 Contributing
This is an academic project. For suggestions or improvements, feel free to open an issue or pull request.

📝 License
This project is for educational purposes only.

👤 Author
Rudrajit Pramanik

GitHub: @rudrajit01

UID: 24BCY70262

Branch: B.E. CSE (Cyber Security)

