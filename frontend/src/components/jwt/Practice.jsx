import { useState } from "react";

function Practice() {

  const [mode, setMode] = useState("vulnerable");

  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." +
    "eyJ1c2VybmFtZSI6InN0dWRlbnQiLCJyb2xlIjoic3R1ZGVudCJ9." +
    "signature123"
  );

  const [role, setRole] = useState("student");

  const [result, setResult] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const runAttack = async () => {

    try {

      const response = await fetch("http://127.0.0.1:5000/jwt-lab", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          mode,
          role,
          token

        })

      });

      const data = await response.json();

      setResult(data.message);

      if (data.success && mode === "vulnerable") {

        setShowComplete(true);

      } else {

        setShowComplete(false);

      }

    }

    catch {

      setResult("❌ Unable to connect to server.");

    }

  };

  // const completeLab = async () => {

  //   const user = JSON.parse(localStorage.getItem("user"));

  //   if (!user) {

  //     alert("Please login first.");

  //     return;

  //   }

  //   try {

  //     const response = await fetch("http://127.0.0.1:5000/complete_lab", {

  //       method: "POST",

  //       headers: {

  //         "Content-Type": "application/json",

  //       },

    //     body: JSON.stringify({

    //       user_id: user.id,

    //       lab_name: "JWT"

    //     })

    //   });

    //   const data = await response.json();

    //   if (data.success) {

    //     alert("🎉 JWT Lab Completed!");

    //     window.location.href = "/dashboard";

    //   }

    // }

  //   catch {

  //     alert("Unable to connect to server.");

  //   }

  // };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-purple-700 mb-6">

        JWT Practice Lab

      </h2>

      {/* Mode */}

      <div className="flex gap-4 mb-6">

        <button

          onClick={() => setMode("vulnerable")}

          className={`px-6 py-3 rounded-lg font-bold ${
            mode === "vulnerable"
              ? "bg-red-600 text-white"
              : "bg-gray-200"
          }`}

        >

          🚨 Vulnerable

        </button>

        <button

          onClick={() => setMode("secure")}

          className={`px-6 py-3 rounded-lg font-bold ${
            mode === "secure"
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}

        >

          🛡 Secure

        </button>

      </div>

      {/* JWT */}

      <h3 className="font-bold text-xl mb-3">

        JWT Token

      </h3>

      <textarea

        value={token}

        onChange={(e) => setToken(e.target.value)}

        className="w-full border rounded-lg p-4 h-40 font-mono"

      />

      {/* Decode */}

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="bg-blue-50 rounded-lg p-5">

          <h3 className="font-bold text-blue-700">

            Header

          </h3>

<pre className="mt-3">

{`{
 "alg":"HS256",
 "typ":"JWT"
}`}

</pre>

        </div>

        <div className="bg-yellow-50 rounded-lg p-5">

          <h3 className="font-bold text-yellow-700">

            Payload

          </h3>

<pre className="mt-3">

{`{
 "username":"student",
 "role":"student"
}`}

</pre>

        </div>

      </div>

      {/* Attack */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold">

          Role Tampering

        </h3>

        <select

          value={role}

          onChange={(e) => setRole(e.target.value)}

          className="border rounded-lg p-3 mt-4"

        >

          <option>student</option>

          <option>admin</option>

        </select>

      </div>

      <button

        onClick={runAttack}

        className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg"

      >

        Launch Attack

      </button>

      {result && (

        <div className="mt-8 bg-gray-900 text-green-400 rounded-lg p-6 whitespace-pre-line">

          {result}

        </div>

      )}

      <div className="mt-10 bg-red-50 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-red-700">

          Attack Explanation

        </h3>

        <p className="mt-4">

          {mode === "vulnerable"

            ? "The server trusts the JWT without verifying the signature. Changing the role from student to admin grants unauthorized access."

            : "The server verifies the JWT signature before accepting the token. Any modification invalidates the signature and the request is rejected."

          }

        </p>

      </div>

      {/* {showComplete && (

        <div className="mt-10 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete JWT Lab

          </button>

        </div>

      )} */}

    </div>

  );

}

export default Practice;