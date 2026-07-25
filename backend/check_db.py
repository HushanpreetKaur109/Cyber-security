import sqlite3

conn = sqlite3.connect("database.db")
conn.row_factory = sqlite3.Row

cursor = conn.cursor()

print("\n========= USERS =========")

cursor.execute("SELECT * FROM users")

users = cursor.fetchall()

for user in users:
    print(dict(user))

print("\n========= USER PROGRESS =========")

cursor.execute("""
SELECT *
FROM user_progress
ORDER BY user_id, id
""")

progress = cursor.fetchall()

for row in progress:
    print(dict(row))

print("\n================================")

choice = input("\nDo you want to reset a user's progress? (yes/no): ").lower()

if choice == "yes":

    user_id = int(input("Enter User ID: "))

    cursor.execute("""
        UPDATE user_progress
        SET completed = 0
        WHERE user_id = ?
    """, (user_id,))

    conn.commit()

    print(f"\n✅ Progress reset successfully for User {user_id}")

else:

    print("\nNo changes made.")

conn.close()