import { useState } from "react";

function Practice() {

  const [mode, setMode] = useState("vulnerable");

  const [amount, setAmount] = useState("5000");

  const [receiver, setReceiver] = useState("Attacker");

  const [result, setResult] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const runAttack = async () => {

    try {

      const response = await fetch("http://127.0.0.1:5000/csrf-lab", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          mode,
          amount,
          receiver

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

          lab_name: "CSRF"

        })

      });

      const data = await response.json();

      if (data.success) {

        alert("🎉 CSRF Lab Completed!");

        window.location.href = "/dashboard";

      }

    }

    catch {

      alert("Unable to connect to server.");

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-indigo-700 mb-6">

        🛡 CSRF Practice Lab

      </h2>

      {/* Mode */}

      <div className="flex gap-4 mb-8">

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

      {/* Bank Form */}

      <div className="bg-gray-100 rounded-lg p-6">

        <h3 className="text-2xl font-bold mb-5">

          💳 Bank Transfer

        </h3>

        <div className="space-y-4">

          <input

            type="text"

            value={receiver}

            onChange={(e) => setReceiver(e.target.value)}

            placeholder="Receiver"

            className="w-full border rounded-lg p-3"

          />

          <input

            type="number"

            value={amount}

            onChange={(e) => setAmount(e.target.value)}

            placeholder="Amount"

            className="w-full border rounded-lg p-3"

          />

        </div>

      </div>

      {/* Launch */}

      <button

        onClick={runAttack}

        className="mt-8 bg-indigo-700 hover:bg-indigo-800 text-white px-8 py-3 rounded-lg"

      >

        🚀 Launch CSRF Attack

      </button>

      {/* Result */}

      {result && (

        <div className="mt-8 bg-gray-900 text-green-400 rounded-lg p-6 whitespace-pre-line">

          {result}

        </div>

      )}

      {/* Explanation */}

      <div className="mt-10 bg-blue-50 rounded-lg p-6">

        <h3 className="text-2xl font-bold text-blue-700">

          Why?

        </h3>

        <p className="mt-4 text-gray-700">

          {mode === "vulnerable"

            ? "The server accepts the request without verifying a CSRF token. An attacker can trick the browser into submitting the request."

            : "The server verifies the CSRF token before processing the request. Invalid or missing tokens are rejected."

          }

        </p>

      </div>

      {/* Complete */}

      {showComplete && (

        <div className="mt-10 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete CSRF Lab

          </button>

        </div>

      )}

    </div>

  );

}

export default Practice;