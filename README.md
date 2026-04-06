# Smart Inventory System (Same-Origin Full Stack App)

## 📌 Project Overview

The **Smart Inventory System** is a simple full-stack web application that allows users to:

* Add products (name, price, quantity)
* View available products
* Manage inventory in real time

This project demonstrates how to build and run a frontend and backend application **from the same origin**, eliminating the need for CORS configuration.

---

## 🎯 Purpose of the Project

The goal of this project is to help developers understand:

* How frontend and backend communicate in a web application
* How to structure a full-stack app using a single server
* Why CORS is not required when both layers share the same origin
* The basics of building APIs and connecting them to a user interface

---

## ⚙️ How It Works

### 1. Backend (Server)

* Built using Node.js and Express
* Handles API requests such as:

  * Fetching products (`GET /api/products`)
  * Adding products (`POST /api/products`)
* Stores data in memory (for simplicity)

### 2. Frontend (Client)

* Built with HTML, CSS, and JavaScript
* Sends requests to the backend using `fetch()`
* Dynamically updates the UI based on API responses

### 3. Same-Origin Setup

Both frontend and backend are served from the same server:

```
http://localhost:5000
```

* Frontend files are served using Express static middleware
* API endpoints exist under the same domain and port

This means:

* No cross-origin requests
* No browser security restrictions
* No need for CORS

---

## 📁 Project Structure

```
smart-inventory/
│
├── server.js          # Backend server and API logic
├── package.json       # Project configuration
│
└── public/            # Frontend files
    ├── index.html
    ├── style.css
    └── app.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies

```
npm install
```

### 2. Run the Server

```
node server.js
```

### 3. Open in Browser

```
http://localhost:5000
```

---

## 🔍 Key Learning Points

* Serving frontend and backend from one origin simplifies development
* Browsers only enforce CORS on cross-origin requests
* Express can act as both an API server and a static file server
* Full-stack apps don’t always require separate deployments

---

## ⚠️ Limitations

* Data is not persisted (stored in memory only)
* No authentication or user management
* Not optimized for production use

---

## 📈 Possible Improvements

* Add a database (MongoDB, PostgreSQL)
* Implement authentication (JWT)
* Add update and delete functionality
* Improve UI/UX design
* Introduce low-stock alerts and filtering features

---

## 🧠 Conclusion

This project is a foundational example of how modern web applications can be structured efficiently. By serving both frontend and backend from the same origin, it simplifies communication and avoids unnecessary configuration like CORS, making it ideal for learning and small-scale applications.

---
