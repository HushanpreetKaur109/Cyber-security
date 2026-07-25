import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Practice() {

  const navigate = useNavigate();

  const [payload, setPayload] = useState("");

  const [mode, setMode] = useState("vulnerable");

  const [result, setResult] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const runXSS = async () => {

    try {

      const response = await fetch("http://127.0.0.1:5000/xss-lab", {

        method: "POST",

        headers: {

          "Content-Type": "application/json",

        },

        body: JSON.stringify({

          payload,
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

          lab_name: "XSS"

        })

      });

      const data = await response.json();

      if (data.success) {

        alert("🎉 XSS Lab Completed!");

        window.location.href = "/dashboard";

      }

    } catch (error) {

      alert("Unable to connect to server.");

    }

  };

  return (

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        💻 XSS Practice Lab
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

      {/* Payload Input */}

      <textarea

        value={payload}

        onChange={(e) => setPayload(e.target.value)}

        placeholder="Enter XSS Payload..."

        className="w-full border rounded-lg p-4 h-32"

      />

      {/* Sample Payloads */}

      <div className="mt-6">

        <h3 className="font-bold mb-3">
          Sample Payloads
        </h3>

        <div className="flex flex-wrap gap-3">

          <button
            onClick={() => setPayload("<script>alert('XSS')</script>")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            Alert
          </button>

          <button
            onClick={() => setPayload("<img src=x onerror=alert('XSS')>")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            Image
          </button>

          <button
            onClick={() => setPayload("<svg onload=alert('XSS')>")}
            className="bg-gray-800 text-white px-3 py-2 rounded"
          >
            SVG
          </button>

        </div>

      </div>

      {/* Run Button */}

      <button

        onClick={runXSS}

        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg"

      >

        ▶ Run Attack

      </button>

            {/* Result */}

      {result && (

        <div className="mt-8">

          <h3 className="text-2xl font-bold mb-4">
            Result
          </h3>

          <div className="bg-gray-900 text-green-400 rounded-lg p-6 whitespace-pre-line">

            {result}

          </div>

        </div>

      )}

      {/* Browser Preview */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold mb-4">
          Browser Preview
        </h3>

        <div className="border rounded-lg p-6 bg-white">

          {mode === "vulnerable" ? (

            <div dangerouslySetInnerHTML={{ __html: payload }} />

          ) : (

            <pre className="text-red-600 whitespace-pre-wrap">

              {payload}

            </pre>

          )}

        </div>

      </div>

      {/* Explanation */}

      <div className="mt-10 bg-blue-50 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-blue-700">
          Why?
        </h3>

        <p className="mt-3 text-gray-700">

          {mode === "vulnerable"
            ? "The application renders user input directly using HTML, allowing JavaScript to execute."
            : "The application treats user input as plain text, preventing JavaScript execution."}

        </p>

      </div>

      {/* Complete Lab */}

      {showComplete && (

        <div className="mt-10 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete XSS Lab

          </button>

        </div>

      )}

    </div>

  );

}

export default Practice;