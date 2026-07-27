from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

DATABASE = "database.db"


# -----------------------------
# Database Connection
# -----------------------------
def get_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn


# -----------------------------
# Home Route
# -----------------------------
@app.route("/")
def home():
    return jsonify({
        "success": True,
        "message": "VulnLab Backend Running Successfully"
    })


@app.route("/contact", methods=["POST"])
def contact():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")

    if not name or not email or not subject or not message:
        return jsonify({
            "message": "All fields are required."
        }), 400

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
        INSERT INTO contact_messages
        (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    """, (name, email, subject, message))

    conn.commit()
    conn.close()

    return jsonify({
        "message": "Message sent successfully!"
    }), 200


# -----------------------------
# Register API
# -----------------------------
@app.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    fullname = data.get("fullname")
    username = data.get("username")
    password = data.get("password")

    if not fullname or not username or not password:

        return jsonify({
            "success": False,
            "message": "Please fill all fields."
        })

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE username=?",
        (username,)
    )

    if cursor.fetchone():

        conn.close()

        return jsonify({
            "success": False,
            "message": "Username already exists!"
        })

    cursor.execute("""
        INSERT INTO users(fullname, username, password)
        VALUES (?, ?, ?)
    """, (fullname, username, password))

    conn.commit()

    user_id = cursor.lastrowid

    # Create Progress For All Labs

    labs = [

        "SQL Injection",
        "XSS",
        "JWT",
        "CSRF",
        "File Upload"

    ]

    for lab in labs:

        cursor.execute("""

        INSERT INTO user_progress(user_id, lab_name, completed)

        VALUES (?, ?, ?)

        """, (user_id, lab, 0))

    conn.commit()

    conn.close()

    return jsonify({

        "success": True,

        "message": "Registration Successful"

    })


# -----------------------------
# Login API
# -----------------------------
@app.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""

        SELECT *

        FROM users

        WHERE username=? AND password=?

    """, (username, password))

    user = cursor.fetchone()

    conn.close()

    if user:

        return jsonify({

            "success": True,

            "message": "Login Successful",

            "user": {

                "id": user["id"],
                "fullname": user["fullname"],
                "username": user["username"]

            }

        })

    return jsonify({

        "success": False,

        "message": "Invalid Username or Password"

    })
     # -----------------------------
# SQL Injection Lab API
# -----------------------------
@app.route("/sql-lab", methods=["POST"])
def sql_lab():

    data = request.get_json()

    username = data.get("username", "")
    password = data.get("password", "")
    mode = data.get("mode", "vulnerable")

    payloads = [

        "' OR '1'='1",
        "admin'--",
        "' OR 1=1--",
        "' UNION SELECT NULL--",
        "' OR 'a'='a",
        "' OR ''='",
        "' OR 1=1#",
        "admin' #"

    ]

    if mode == "vulnerable":

        for payload in payloads:

            if payload.lower() in username.lower():

                return jsonify({

                    "success": True,

                    "message":
                    "🚨 SQL Injection Successful!\n\n"
                    "Authentication Bypassed.\n\n"
                    "The application directly inserted your input into the SQL query."

                })

        if username == "student" and password == "1234":

            return jsonify({

                "success": True,

                "message": "✅ Normal Login Successful."

            })

        return jsonify({

            "success": False,

            "message": "❌ Invalid Username or Password."

        })

    else:

        for payload in payloads:

            if payload.lower() in username.lower():

                return jsonify({

                    "success": False,

                    "message":
                    "🛡 SQL Injection Blocked!\n\n"
                    "Prepared Statements prevented this attack."

                })

        if username == "student" and password == "1234":

            return jsonify({

                "success": True,

                "message": "✅ Secure Login Successful."

            })

        return jsonify({

            "success": False,

            "message": "❌ Invalid Username or Password."

        })


# -----------------------------
# XSS Lab API
# -----------------------------
@app.route("/xss-lab", methods=["POST"])
def xss_lab():

    data = request.get_json()

    payload = data.get("payload", "")
    mode = data.get("mode", "vulnerable")

    attacks = [

        "<script>",
        "alert(",
        "<img",
        "onerror=",
        "<svg",
        "onload="

    ]

    if mode == "vulnerable":

        for attack in attacks:

            if attack.lower() in payload.lower():

                return jsonify({

                    "success": True,

                    "message":
                    "🚨 XSS Payload Executed Successfully!\n\n"
                    "The browser executed the injected JavaScript.\n\n"
                    "Cookies and session tokens could be stolen."

                })

        return jsonify({

            "success": False,

            "message": "❌ No XSS payload detected."

        })

    else:

        for attack in attacks:

            if attack.lower() in payload.lower():

                return jsonify({

                    "success": False,

                    "message":
                    "🛡 XSS Attack Blocked!\n\n"
                    "The application escaped the malicious input."

                })

        return jsonify({

            "success": True,

            "message": "✅ Safe Input Accepted."

        })


# -----------------------------
# JWT Lab API
# -----------------------------
@app.route("/jwt-lab", methods=["POST"])
def jwt_lab():

    data = request.get_json()

    token = data.get("token", "")
    role = data.get("role", "student")
    mode = data.get("mode", "vulnerable")

    if mode == "vulnerable":

        if role == "admin":

            return jsonify({

                "success": True,

                "message":
                "🚨 JWT Authentication Bypassed!\n\n"
                "Role modified from STUDENT to ADMIN.\n\n"
                "Access Granted."

            })

        return jsonify({

            "success": True,

            "message": "✅ Logged in as Student."

        })

    else:

        if role == "admin":

            return jsonify({

                "success": False,

                "message":
                "🛡 Invalid JWT Signature!\n\n"
                "Token Tampering Detected.\n\n"
                "Access Denied."

            })

        return jsonify({

            "success": True,

            "message":
            "✅ JWT Verified Successfully."

        })

    #  CSRF Lab API
@app.route("/csrf-lab", methods=["POST"])
def csrf_lab():

    data = request.get_json()

    mode = data.get("mode")
    amount = data.get("amount")
    receiver = data.get("receiver")

    if mode == "vulnerable":

        return jsonify({

            "success": True,

            "message":
f"""🚨 CSRF Attack Successful!

Money Transfer Completed

Receiver : {receiver}

Amount : ₹{amount}

Reason:
The server accepted the request without verifying a CSRF token.

An attacker could trick the victim into transferring money automatically.
"""

        })

    else:

        return jsonify({

            "success": False,

            "message":
"""🛡 CSRF Attack Blocked!

Transfer Failed.

Reason:
The server verified the CSRF Token before processing the request.

The request was rejected because the token was missing or invalid.
"""

        })

         # -----------------------------
# Dashboard API
# -----------------------------
@app.route("/dashboard/<int:user_id>", methods=["GET"])
def dashboard(user_id):

    conn = get_connection()
    cursor = conn.cursor()

    total_labs = 5

    # Completed Labs Count
    cursor.execute("""
        SELECT COUNT(*)
        FROM user_progress
        WHERE user_id=? AND completed=1
    """, (user_id,))

    completed = cursor.fetchone()[0]

    # SQL Status
    cursor.execute("""
        SELECT completed
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, "SQL Injection"))

    sql_row = cursor.fetchone()
    sql_completed = sql_row["completed"] if sql_row else 0

    # XSS Status
    cursor.execute("""
        SELECT completed
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, "XSS"))

    xss_row = cursor.fetchone()
    xss_completed = xss_row["completed"] if xss_row else 0

    # JWT Status
    cursor.execute("""
        SELECT completed
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, "JWT"))

    jwt_row = cursor.fetchone()
    jwt_completed = jwt_row["completed"] if jwt_row else 0

    # CSRF Status
    cursor.execute("""
        SELECT completed
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, "CSRF"))

    csrf_row = cursor.fetchone()
    csrf_completed = csrf_row["completed"] if csrf_row else 0

    # File Upload Status
    cursor.execute("""
        SELECT completed
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, "File Upload"))

    file_row = cursor.fetchone()
    file_completed = file_row["completed"] if file_row else 0

    progress = int((completed / total_labs) * 100)

    locked = total_labs - completed

    conn.close()

    return jsonify({

        "totalLabs": total_labs,

        "completed": completed,

        "locked": locked,

        "progress": progress,

        "sqlCompleted": bool(sql_completed),

        "xssCompleted": bool(xss_completed),

        "jwtCompleted": bool(jwt_completed),

        "csrfCompleted": bool(csrf_completed),

        "fileCompleted": bool(file_completed)

    })


# -----------------------------
# Complete Lab API
# -----------------------------
@app.route("/complete_lab", methods=["POST"])
def complete_lab():

    data = request.get_json()

    user_id = data.get("user_id")
    lab_name = data.get("lab_name")

    conn = get_connection()
    cursor = conn.cursor()

    # Check if progress row already exists
    cursor.execute("""
        SELECT *
        FROM user_progress
        WHERE user_id=? AND lab_name=?
    """, (user_id, lab_name))

    row = cursor.fetchone()

    if row:
        # Update existing row
        cursor.execute("""
            UPDATE user_progress
            SET completed=1
            WHERE user_id=? AND lab_name=?
        """, (user_id, lab_name))
    else:
        # Create new row
        cursor.execute("""
            INSERT INTO user_progress(user_id, lab_name, completed)
            VALUES (?, ?, 1)
        """, (user_id, lab_name))

    conn.commit()
    conn.close()

    return jsonify({
        "success": True,
        "message": f"{lab_name} completed successfully."
    })
# -----------------------------
# Users API
# -----------------------------
@app.route("/users", methods=["GET"])
def users():

    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, fullname, username
        FROM users
    """)

    rows = cursor.fetchall()

    conn.close()

    users = []

    for row in rows:

        users.append({

            "id": row["id"],
            "fullname": row["fullname"],
            "username": row["username"]

        })

    return jsonify(users)


# -----------------------------
# Health API
# -----------------------------
@app.route("/health")
def health():

    return jsonify({

        "success": True,

        "message": "Backend Running Successfully"

    })


# -----------------------------
# Run Server
# -----------------------------
if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )

    