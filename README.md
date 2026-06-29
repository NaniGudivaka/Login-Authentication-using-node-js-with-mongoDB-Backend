# 🔐 User Authentication System

A full-stack user authentication application built with **Node.js**, **Express.js**, **MongoDB**, and **JWT**. It allows users to register, log in securely, access protected routes, and log out.

## 🚀 Features

- User Registration
- User Login
- Password Hashing with bcrypt
- JWT Authentication
- Protected Routes
- Logout
- MongoDB Database
- Express Middleware
- CORS Support
- Cookie Parser
- Environment Variables (.env)
- Error Handling

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt

## 📂 Project Structure

```
project/
│
├── config/
│   └── db.js
│
├── middleware/
│   └── verifyToken.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── authRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/NaniGudivaka/Login-Authentication-using-node-js-with-mongoDB-Backend.git
```

### Go to project folder

```bash
cd project-name
```

### Install dependencies

```bash
npm install
```

### Create a .env file

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Start the server

```bash
npm start
```

or

```bash
nodemon server.js
```

## 📌 API Endpoints

### Register

```
POST /auth/signup
```

### Login

```
POST /auth/login
```

### Get Logged-in User

```
GET /auth/me
```

### Logout

```
POST /auth/logout
```

## 🔒 Security

- Passwords are hashed using bcrypt.
- JWT is used for authentication.
- Environment variables protect sensitive credentials.
- Protected routes require a valid token.



## 📈 Future Improvements

- Email Verification
- Forgot Password
- Password Reset
- Profile Update
- Refresh Tokens
- Role-Based Authentication
- Account Deletion

## 👨‍💻 Author

NANI GUDIVAKA

GitHub:
https://github.com/NaniGudivaka

LinkedIn:
https://linkedin.com/in/gudivaka-nani

