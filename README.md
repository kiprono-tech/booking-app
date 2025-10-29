## 🏨 BookingApp

A **Full-Stack Booking Application** that allows users to search and book hotels, manage reservations, and for administrators to monitor and control bookings through an integrated **Admin Dashboard**.
Built using **React**, **Node.js**, **Express**, and **MongoDB**, this project demonstrates modern web application design — with modular architecture, reusable components, and secure authentication.

---

### 🚀 About

**BookingApp** is a full-featured hotel booking platform with:

* 🧑‍💻 **Frontend (Client)** – User-facing web app to browse, search, and book hotels.
* 🛠️ **Backend (API)** – RESTful API built with Node.js & Express, connected to MongoDB.
* 🧾 **Admin Panel** – Admin dashboard for managing hotels, rooms, and users.

---

## 🗂️ Folder Structure

```
BookingApp/
│
├── frontend/              # React frontend for users
│   ├── src/
│   │   ├── components/    # Reusable UI components (Navbar, Header, Footer, etc.)
│   │   ├── pages/         # Main pages (Home, List, Hotel, Login)
│   │   ├── context/       # React Context for Auth & Search states
│   │   ├── hooks/         # Custom hooks like useFetch
│   │   └── App.js         # Main React entry point
│   └── package.json
│
├── admin/                 # React admin panel
│   ├── src/
│   │   ├── components/    # Widgets, Charts, Sidebar, Navbar
│   │   ├── pages/         # Admin pages (Users, Hotels, Rooms)
│   │   └── App.js
│   └── package.json
│
├── backend/               # Node.js + Express API
│   ├── controllers/       # Business logic (users, hotels, rooms)
│   ├── models/            # Mongoose schemas
│   ├── routes/            # Express route handlers
│   ├── utils/             # Utility functions & middleware (auth, error handling)
│   ├── index.js           # App entry point
│   └── package.json
│
└── README.md
```

---

## 🧩 Features

### 🖥️ Frontend

* Browse hotels by destination and date range
* Filter hotels by type (apartment, resort, villa, etc.)
* User login and registration
* Dynamic hotel details and room availability
* Room reservation flow with date-based availability checks

### ⚙️ Backend

* Secure RESTful API endpoints
* JSON Web Token (JWT) authentication
* CRUD operations for hotels, users, and rooms
* MongoDB database connection via Mongoose
* Error handling middleware and token verification

### 🧑‍💼 Admin Panel

* Add, edit, and delete hotels, rooms, and users
* View statistics and analytics widgets
* Manage availability and pricing in real-time

---

## 🛠️ Tech Stack

### **Frontend & Admin**

* React.js (Hooks, Context API)
* React Router DOM
* Axios
* FontAwesome Icons
* Date-fns
* React Date Range

### **Backend**

* Node.js
* Express.js
* MongoDB with Mongoose
* JSON Web Tokens (JWT)
* bcrypt.js (password hashing)
* dotenv (environment configuration)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/BookingApp.git
cd BookingApp
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=8800
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the backend:

```bash
npm start
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

### 4️⃣ Admin Panel Setup

```bash
cd ../admin
npm install
npm start
```

---

## 🌍 Environment Variables

| Variable     | Description                       |
| ------------ | --------------------------------- |
| `PORT`       | Port on which backend runs        |
| `MONGO_URL`  | MongoDB connection URI            |
| `JWT_SECRET` | Secret key for JWT authentication |

---

## 🔐 Authentication Flow

* Users register and log in via the frontend.
* JWT tokens are issued on login and verified on each API request.
* Protected routes ensure only authenticated users and admins can perform specific actions.

---

## 📊 API Overview

| Method | Endpoint                      | Description                |
| ------ | ----------------------------- | -------------------------- |
| `POST` | `/api/auth/register`          | Register new user          |
| `POST` | `/api/auth/login`             | User login                 |
| `GET`  | `/api/users`                  | Get all users (Admin only) |
| `POST` | `/api/hotels`                 | Add new hotel              |
| `GET`  | `/api/hotels/find/:id`        | Get hotel by ID            |
| `PUT`  | `/api/rooms/availability/:id` | Update room availability   |

---

## 🧠 Architecture Overview

| Layer                 | Description                                     |
| --------------------- | ----------------------------------------------- |
| **Controllers**       | Handle core logic for each entity               |
| **Models**            | Define data structure (User, Hotel, Room)       |
| **Routes**            | API endpoints linking URLs to controllers       |
| **Services/Utils**    | Contain authentication and error handling logic |
| **Frontend Contexts** | Manage global user and search states            |

---

## 🧑‍🤝‍🧑 Contributors

* **Vincent Kiprono** – Full Stack Developer (Lead)
* *Assisted by team members contributing to UI/UX and deployment*

---
## 🛡️ License

This project is licensed under the MIT License — feel free to use and modify it.

## ⭐ Acknowledgments

Inspired by modern hotel booking systems

Built with love and clean code 💙

Thanks to the open-source community for resources and libraries used
Would you like me to:
