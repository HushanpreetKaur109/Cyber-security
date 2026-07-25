import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

# -----------------------------
# Users Table
# -----------------------------
cursor.execute("""
CREATE TABLE IF NOT EXISTS users(

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    fullname TEXT NOT NULL,

    username TEXT UNIQUE NOT NULL,

    password TEXT NOT NULL

)
""")

# -----------------------------
# User Progress Table
# -----------------------------
cursor.execute("""
CREATE TABLE IF NOT EXISTS user_progress(

    id INTEGER PRIMARY KEY AUTOINCREMENT,

    user_id INTEGER NOT NULL,

    lab_name TEXT NOT NULL,

    completed INTEGER DEFAULT 0,

    FOREIGN KEY(user_id) REFERENCES users(id)

)
""")

conn.commit()
conn.close()

print("Database Created Successfully")