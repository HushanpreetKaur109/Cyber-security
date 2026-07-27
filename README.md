# 🔐 VulnLab - Cybersecurity Learning Platform

VulnLab is an interactive cybersecurity learning platform designed to help students understand common web application vulnerabilities through hands-on practice. The platform provides both **Vulnerable Mode** (to demonstrate attacks) and **Secure Mode** (to demonstrate proper security implementations), allowing users to learn by comparing insecure and secure coding practices.

---

## 📌 Features

- 👤 User Registration & Login
- 📚 Interactive Cybersecurity Labs
- ⚠️ Vulnerable Mode for practicing attacks
- 🛡️ Secure Mode showing secure implementations
- 📊 Dashboard with progress tracking
- 📝 Quizzes after each lab
- 🏆 Certificate Generation after completing all labs
- 💾 SQLite Database Integration
- 🌐 Responsive User Interface

---

## 🚀 Technologies Used

### Frontend
- React.js
- Vite
- React Router DOM
- Tailwind CSS
- JavaScript

### Backend
- Flask
- Flask-CORS
- SQLite
- Python

---

## 🛡️ Cybersecurity Labs

The platform currently includes the following labs:

### 1. SQL Injection
Learn how attackers manipulate SQL queries and how Prepared Statements prevent SQL Injection.

Topics Covered:
- Login Bypass
- SQL Query Manipulation
- Parameterized Queries
- Input Validation

---

### 2. Cross Site Scripting (XSS)
Understand how malicious JavaScript can be injected into web pages.

Topics Covered:
- Reflected XSS
- Stored XSS
- DOM-Based XSS
- Output Encoding
- Input Sanitization

---

### 3. JWT Authentication *(Planned)*
Learn about JSON Web Tokens and authentication vulnerabilities.

Topics Covered:
- JWT Structure
- Weak Secret Keys
- Token Validation
- Secure Authentication

---

### 4. CSRF *(Planned)*

Learn how attackers force authenticated users to perform unintended actions.

Topics Covered:
- CSRF Attack
- CSRF Tokens
- SameSite Cookies

---

### 5. Path Traversal *(Planned)*

Learn how attackers access unauthorized files on a server.

Topics Covered:
- Directory Traversal
- File Validation
- Secure File Access

---

### 6. File Upload *(Planned)*

Understand insecure file upload vulnerabilities and secure file validation techniques.

---

## 📁 Project Structure

```
VulnLab/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── init_db.py
│   ├── database.db
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/your-username/VulnLab.git
```

```bash
cd VulnLab
```

---

## Backend Setup

Navigate to backend folder

```bash
cd backend
```

Create virtual environment

```bash
python -m venv venv
```

Activate virtual environment

### Windows

```bash
venv\Scripts\activate
```

### Linux/Mac

```bash
source venv/bin/activate
```

Install dependencies

```bash
pip install -r requirements.txt
```

Initialize database

```bash
python init_db.py
```

Run Flask server

```bash
python app.py
```

---

## Frontend Setup

Navigate to frontend folder

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run React application

```bash
npm run dev
```

The application will run at:

```
http://localhost:5173
```

---

## Learning Workflow

1. Register/Login
2. Open Dashboard
3. Select a Lab
4. Read Theory
5. Practice Attack
6. Learn Prevention
7. Complete Quiz
8. Progress Updates Automatically
9. Generate Certificate after completing all labs

---

## Security Notice

This project is built **only for educational purposes**.

The vulnerable implementations are intentionally included to demonstrate how common web attacks work and how developers can prevent them. They should **never** be used in production environments.

---

## Future Improvements

- Password Hashing
- Email Verification
- Multi-Level Difficulty
- Leaderboard
- More OWASP Top 10 Labs
- Admin Panel
- Docker Deployment
- User Profiles
- Lab Hints
- Dark Mode

---

## Learning Objectives

By completing this project, users will learn:

- SQL Injection
- Cross Site Scripting (XSS)
- Authentication Security
- Secure Coding Practices
- Input Validation
- Output Encoding
- Database Security
- Web Application Security
- OWASP Top 10 Vulnerabilities

---

## Author

**Hushanpreet Kaur**

B.Tech Computer Science Engineering

Cybersecurity Enthusiast

---

## License

This project is licensed under the MIT License.

---

⭐ If you found this project helpful, don't forget to star the repository!
