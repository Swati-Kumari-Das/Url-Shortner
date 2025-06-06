📌 URL Shortener – MERN Stack Project
A full-stack URL shortener web app built using the MERN stack. It allows users to register/login, shorten long URLs (with optional custom aliases), and manage their personal URL history. The project uses modern tools and practices like a modular backend, JWT-based authentication, Redux Toolkit, and TanStack Router for smooth client-side routing.
## 🛠️ Tech Stack Used
Frontend: React, TanStack Router, Redux Toolkit, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Authentication: JWT, bcrypt, HTTP-only cookies
## 🚀 Features
- ✅ User Registration & Login (JWT + bcrypt)
- 🔐 Protected Routes & Persistent Auth (via cookies)
- 📦 Modular Backend Structure
- 🔗 Shorten URLs (with optional custom aliases)
- 👤 User-specific URL Dashboard
- 🌐 TanStack Router for fast client-side routing
- 🧠 Redux Toolkit for state management
- 💾 MongoDB Database (Mongoose)
## 🗂️ Folder Structure
### 🔙 Backend (`/Backend/src`)
- `config/` – Environment and DB config
- `controllers/` – Handles request logic
- `dao/` – Data access and DB operations
- `middleware/` – Auth (JWT), error handling
- `models/` – Mongoose schemas for User and URL
- `routes/` – API endpoints
- `services/` – Business logic (e.g., token, URL gen)
- `utils/` – Helpers like JWT verification
- `app.js` – Entry point of the Express server
### 🔜 Frontend (`/Frontend/src`)
- `api/` – Axios services for backend communication
- `components/` – Reusable UI elements
- `pages/` – Pages like Login, Register, Dashboard
- `router/` – TanStack Router setup
- `store/` – Redux slices and store config
- `utils/` – Frontend helper functions
- `main.jsx` – App entry point
## ⚙️ Installation Steps
1. Clone the repository
https://github.com/Swati-Kumari-Das/Url-Shortner.git
cd url-shortener
2. Backend Setup->cd Backend -> npm install->Create a .env file ->npm run dev
3. Frontend Setup:cd ../Frontend -> npm install  -> npm run dev

