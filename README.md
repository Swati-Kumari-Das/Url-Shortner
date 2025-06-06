📌 URL Shortener – MERN Stack Project
This is a URL Shortener web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to register/login, shorten long URLs, generate custom short URLs, and manage their URL history securely. The project implements modern practices such as modular backend, JWT authentication, Redux for state management, and TanStack Router for client-side routing.

🚀 Features & Functionalities
🔧 Backend Development
Creating Basic Backend: Set up a Node.js and Express server with RESTful API endpoints for authentication and URL management.

Modularising Backend: Backend code is cleanly separated into controllers, routes, services, middlewares, and utility files for scalability and maintainability.

⚛️ Frontend (React)
Starting with React: Built a dynamic and responsive frontend using React with clean functional components and hooks.

📦 TanStack Router
What is TanStack: Used TanStack Router (a modern, type-safe routing library) for efficient and declarative routing instead of traditional React Router.

Client Side Routing: Enables seamless navigation across pages like Home, Login, Register, Dashboard, and Not Found without reloading.

🔐 Authentication System
Authentication: Implemented secure user registration and login using:

bcrypt for password hashing

JWT (JSON Web Tokens) for user authentication

Persistent Authentication: Maintains user sessions using HTTP-only cookies and protects routes using middleware both on frontend and backend.

🌐 URL Management
Custom URLs: Users can optionally set a custom short URL instead of auto-generated hashes.

Shorten URLs: Long links are shortened and saved in the database with click tracking.

User-Specific URLs: Only the logged-in user's shortened URLs are displayed.

🧠 State Management
Redux Setup: Used Redux Toolkit to manage global state like auth status, user data, and URL list.

Persistent Auth State: Ensured user stays logged in across page refreshes using Redux + cookies.

🛠️ Tech Stack
Tech	               Use
MongoDB	             Database
Express.js	         Backend framework
React	Frontend       UI
Node.js	             Server environment
Redux Toolkit        State management
TanStack Router 	   Routing
JWT	Authentication   tokens
bcrypt	             Password hashing

## 🚀 Features

- ✅ User Registration & Login (JWT + bcrypt)
- 🔐 Protected Routes & Persistent Auth (via cookies)
- 📦 Modular Backend Structure
- 🔗 Shorten URLs (with optional custom aliases)
- 👤 User-specific URL Dashboard
- 🌐 TanStack Router for fast client-side routing
- 🧠 Redux Toolkit for state management
- 💾 MongoDB Database (Mongoose)

---

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

2. Backend Setup
cd Backend
npm install

# Create a .env file
touch .env
.env Example
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
npm run dev

3. Frontend Setup

cd ../Frontend
npm install
npm run dev

