import { useState } from "react";

function Practice() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [mode, setMode] = useState("vulnerable");

  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const runSQL = async () => {

    const sql =
      `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;

    setQuery(sql);

    try {

      const response = await fetch("http://127.0.0.1:5000/sql-lab", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          username,
          password,
          mode

        })

      });

      const data = await response.json();

      setResult(data.message);

      if (data.success && mode === "vulnerable") {

        setShowComplete(true);

      } else {

        setShowComplete(false);

      }

    } catch (error) {

      setResult("❌ Unable to connect to server.");

      setShowComplete(false);

    }

  };

    const completeLab = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {

      alert("Please login first.");

      return;

    }

    try {

      const response = await fetch("http://127.0.0.1:5000/complete_lab", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          user_id: user.id,

          lab_name: "SQL Injection"

        })

      });

      const data = await response.json();

      if (data.success) {

        alert("🎉 SQL Injection Lab Completed!");

        window.location.href = "/xss";

      }

    } catch (error) {

      alert("Unable to connect to server.");

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-red-600 mb-6">

        Practice SQL Injection

      </h2>

      {/* Mode Toggle */}

      <div className="flex gap-4 mb-6">

        <button

          onClick={() => setMode("vulnerable")}

          className={`px-6 py-3 rounded-lg font-bold ${
            mode === "vulnerable"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}

        >

          🚨 Vulnerable Mode

        </button>

        <button

          onClick={() => setMode("secure")}

          className={`px-6 py-3 rounded-lg font-bold ${
            mode === "secure"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}

        >

          🛡 Secure Mode

        </button>

      </div>

      <input

        className="w-full border rounded-lg p-3 mb-4"

        placeholder="Username"

        value={username}

        onChange={(e) => setUsername(e.target.value)}

      />

      <input

        className="w-full border rounded-lg p-3 mb-4"

        placeholder="Password"

        value={password}

        onChange={(e) => setPassword(e.target.value)}

      />

      {/* Quick Payload Buttons */}

      <div className="mb-6">

        <h3 className="font-bold mb-3">

          Sample Payloads

        </h3>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => setUsername("' OR '1'='1")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            ' OR '1'='1
          </button>

          <button
            onClick={() => setUsername("admin'--")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            admin'--
          </button>

          <button
            onClick={() => setUsername("' UNION SELECT NULL--")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            UNION
          </button>

        </div>

      </div>

      <button

        onClick={runSQL}

        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg"

      >

        Run Query

      </button>

            {/* SQL Query Viewer */}

      {query && (

        <div className="mt-8">

          <h3 className="text-xl font-bold mb-3">

            Executed SQL Query

          </h3>

          <div className="bg-black text-green-400 p-5 rounded-lg font-mono overflow-x-auto">

            {query}

          </div>

        </div>

      )}

      {/* Result */}

      {result && (

        <div className="mt-8 bg-gray-100 rounded-lg p-5">

          <h3 className="text-xl font-bold mb-3">

            Result

          </h3>

          <p className="whitespace-pre-line">

            {result}

          </p>

        </div>

      )}

      {/* Database Preview */}

      <div className="mt-10">

        <h3 className="text-xl font-bold mb-4">

          Database Preview

        </h3>

        <table className="w-full border">

          <thead className="bg-red-600 text-white">

            <tr>

              <th className="border p-3">ID</th>

              <th className="border p-3">Username</th>

              <th className="border p-3">Password</th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="border p-3">1</td>

              <td className="border p-3">admin</td>

              <td className="border p-3">admin123</td>

            </tr>

            <tr>

              <td className="border p-3">2</td>

              <td className="border p-3">student</td>

              <td className="border p-3">1234</td>

            </tr>

            <tr>

              <td className="border p-3">3</td>

              <td className="border p-3">john</td>

              <td className="border p-3">john123</td>

            </tr>

          </tbody>

        </table>

      </div>
            {/* Attack Explanation */}

      <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-yellow-700">

          💡 Why did this happen?

        </h3>

        <p className="mt-3 text-gray-700">

          {mode === "vulnerable"
            ? "In Vulnerable Mode, the application directly concatenates user input into the SQL query. An attacker can inject SQL code (for example: ' OR '1'='1) and bypass authentication."
            : "In Secure Mode, the application uses Prepared Statements (Parameterized Queries). User input is treated as data instead of executable SQL code, preventing SQL Injection attacks."}

        </p>

      </div>

      {/* Prevention */}

      <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-green-700">

          🛡 Prevention Tips

        </h3>

        <ul className="list-disc pl-6 mt-3 space-y-2">

          <li>Always use Prepared Statements.</li>

          <li>Validate user input.</li>

          <li>Use ORM frameworks.</li>

          <li>Follow the Principle of Least Privilege.</li>

          <li>Never concatenate user input directly into SQL queries.</li>

        </ul>

      </div>

      {/* Complete Lab Button */}

      {showComplete && (

        <div className="mt-10 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete SQL Injection Lab

          </button>

        </div>

      )}

    </div>

  );

}

export default Practice;