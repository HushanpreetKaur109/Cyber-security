function Database() {

  const users = [

    {
      id: 1,
      username: "admin",
      password: "admin123",
      role: "Administrator",
    },

    {
      id: 2,
      username: "student",
      password: "1234",
      role: "Student",
    },

    {
      id: 3,
      username: "john",
      password: "john123",
      role: "User",
    },

    {
      id: 4,
      username: "alice",
      password: "alice123",
      role: "User",
    },

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-red-600 mb-6">

        🗄 Database Simulation

      </h2>

      <p className="text-gray-600 mb-6">

        This table simulates a vulnerable users database.

      </p>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-red-600 text-white">

              <th className="border p-3">ID</th>

              <th className="border p-3">Username</th>

              <th className="border p-3">Password</th>

              <th className="border p-3">Role</th>

            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="text-center hover:bg-gray-100"
              >

                <td className="border p-3">
                  {user.id}
                </td>

                <td className="border p-3">
                  {user.username}
                </td>

                <td className="border p-3">
                  {user.password}
                </td>

                <td className="border p-3">
                  {user.role}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">

        <h3 className="text-xl font-bold text-yellow-700">

          ⚠ Learning Note

        </h3>

        <p className="mt-3 text-gray-700">

          This database is only a simulation for learning purposes.

          Real applications should never store passwords in plain text.

          Passwords should always be hashed using secure algorithms like
          <strong> bcrypt </strong>
          or
          <strong> Argon2</strong>.

        </p>

      </div>

    </div>

  );

}

export default Database;