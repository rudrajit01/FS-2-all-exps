# 🔐 JWT Authentication System – Experiment 1.3

**Subject:** Full-Stack-2 (24CSP-337)  
**Student:** Rudrajit  
**UID:** 24BCY70262  
**Branch:** B.E. CSE (Cyber Security)  
**Semester:** 5th  
**Section/Group:** 24BCY-2(A)NTPP  
**Date of Performance:** 16/07/2026  

---

## 📌 Aim
To design and implement a secure authentication system using **JSON Web Tokens (JWT)** for user login, session management, and protected route access in a full‑stack web application.

---

## 🧰 Technologies Used
| Layer       | Technologies |
|-------------|--------------|
| **Frontend**| React.js, React Hooks, Axios, HTML5, CSS3 |
| **Backend** | Node.js, Express.js, JSON Web Token (jsonwebtoken), CORS, Dotenv |
| **Tools**   | Visual Studio Code, Google Chrome / Microsoft Edge, Postman |
| **Package Manager** | npm |

---

## ✨ Features Implemented
- ✅ **Login Page** with username & password fields.
- ✅ **User Credential Validation** against mock user data.
- ✅ **JWT Token Generation** on successful login.
- ✅ **Token Storage** in browser `localStorage`.
- ✅ **Protected Dashboard** – only accessible with a valid token.
- ✅ **Authentication Middleware** that verifies every protected request.
- ✅ **User Info Display** – shows logged‑in username and role.
- ✅ **Logout Functionality** – clears token and returns to login.
- ✅ **Error Handling** – clear messages for invalid credentials.
- ✅ **Support for Multiple Roles** – Admin and Student.

---

## 📁 Project Structure (Inside EXP-1.3)
EXP-1.3/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ │ └── authController.js # Login logic & JWT generation
│ │ ├── middleware/
│ │ │ └── authMiddleware.js # Token verification middleware
│ │ ├── routes/
│ │ │ └── authRoutes.js # Public (/login) & protected (/profile) routes
│ │ └── server.js # Express server entry point
│ ├── .env # PORT & JWT_SECRET
│ └── package.json
└── frontend/
├── src/
│ ├── components/
│ │ ├── Login.js # Login form component
│ │ └── Dashboard.js # Protected dashboard component
│ ├── App.js # Main routing logic (Login/Dashboard)
│ └── index.js
├── package.json
└── README.md

text

---

## 🚀 Setup Instructions (Run Locally)

### 1️⃣ Backend Setup
```bash
cd backend
npm install
Create a .env file inside the backend/ folder:

env
PORT=5000
JWT_SECRET=rudrajit_super_secret_key_24BCY70262
Start the backend server:

bash
npm run dev
✅ Server runs at: http://localhost:5000

2️⃣ Frontend Setup
Open a new terminal and navigate to the frontend:

bash
cd frontend
npm install
npm start
✅ React app runs at: http://localhost:3000

🔑 Test Users (Mock Data)
Username	Password	Role
admin	admin123	Admin
student	student123	Student
rudrajit	rudrajit123	Student
(You can add more users inside backend/src/controllers/authController.js.)

🌐 API Endpoints
Method	Endpoint	Description	Auth Required
POST	/api/auth/login	Authenticate user & get JWT token	❌ No
GET	/api/auth/profile	Get current user info	✅ Yes (Bearer Token)
🧪 How to Test the Application
Open http://localhost:3000 in your browser.

Enter a valid username/password (e.g., admin / admin123).

Click Login – you’ll be redirected to the Dashboard.

The dashboard displays your Username and Role.

Open DevTools → Application → Local Storage – you’ll see:

token (JWT)

username

role

Click Logout – the token is cleared and you return to the Login page.

Try invalid credentials – an error message appears immediately.
## 📊 Result
A secure JWT Authentication System was successfully developed using React.js, Node.js, Express.js, and JSON Web Tokens (JWT). The application:

Authenticates users against mock credentials.

Generates a signed JWT upon successful login.

Stores the token securely in localStorage.

Protects the dashboard route using custom middleware.

Displays user‑specific information (username & role).

Handles invalid login attempts gracefully with error messages.

Supports multiple user roles (Admin & Student).

All features work as expected, and the system is fully functional for demonstration.

## 📚 Learning Outcomes
Understand authentication mechanisms in modern web applications.

Implement JWT‑based authentication from scratch.

Generate and validate JSON Web Tokens using jsonwebtoken library.

Manage stateless user sessions without server‑side session storage.

Protect routes using authentication middleware in Express.

Store authentication tokens securely on the client side (localStorage).

Build interactive Login and Dashboard pages using React.

Connect a React frontend with an Express backend using Axios.

🔗 GitHub Repository
Repository: https://github.com/rudrajit01/FS-2-all-exps
Folder: EXP-1.3/

Developed by: Rudrajit (24BCY70262)
Date: 17 August 2026

text

---

### 📂 How to add this to your repo

1. Save the content above as `README.md` inside `FS-2-all-exps/EXP-1.3/`.
2. Stage and commit:
   ```powershell
   cd C:\Users\Acer\OneDrive\Desktop\Code practice\FS-2-all-exps
   git add EXP-1.3/README.md
   git commit -m "Added detailed README for EXP-1.3 (Rudrajit 24BCY70262)"
   git push
