# 🔗 CodeAlpha URL Shortener

A simple and modern full-stack URL Shortener application built as part of the **CodeAlpha Backend Development Internship**.

The application allows users to convert long URLs into short, easy-to-share links. The short URL redirects users to the original URL stored in the database.

---

## 🚀 Features

- 🔗 Shorten long URLs
- ⚡ Generate unique short codes
- 💾 Store URLs in PostgreSQL database
- 🔄 Redirect short URLs to original URLs
- 📋 Copy shortened URL with one click
- 🎨 Modern responsive UI
- ✨ Smooth animations and glassmorphism design
- 🌐 REST API based backend
- 📱 Mobile-friendly interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- CSS3

### Backend
- Node.js
- Express.js
- REST API

### Database
- PostgreSQL

### Other Tools
- Nanoid
- CORS
- dotenv
- Nodemon
- Git & GitHub

---

## 📁 Project Structure

```text
CodeAlpha_URLShortener/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── urlController.js
│   │   │
│   │   ├── db/
│   │   │   └── db.js
│   │   │
│   │   ├── routes/
│   │   │   └── urlRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
