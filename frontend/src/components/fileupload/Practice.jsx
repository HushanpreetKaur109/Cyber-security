import { useState } from "react";

function Practice() {

  const [mode, setMode] = useState("vulnerable");

  const [fileName, setFileName] = useState("");

  const [progress, setProgress] = useState(0);

  const [result, setResult] = useState("");

  const [showComplete, setShowComplete] = useState(false);

  const sampleFiles = [
    "image.jpg",
    "shell.php",
    "malware.exe",
    "script.js",
    "invoice.pdf"
  ];

  const uploadFile = () => {

    if (!fileName) {

      alert("Please select a file.");

      return;

    }

    setProgress(0);

    setResult("");

    setShowComplete(false);

    let value = 0;

    const timer = setInterval(() => {

      value += 10;

      setProgress(value);

      if (value >= 100) {

        clearInterval(timer);

        if (mode === "vulnerable") {

          if (
            fileName.endsWith(".php") ||
            fileName.endsWith(".exe") ||
            fileName.endsWith(".js")
          ) {

            setResult(
`🚨 Upload Successful

File Uploaded:
${fileName}

The server accepted a dangerous executable file.

An attacker can execute this file on the server.

Status:
Server Compromised`
            );

            setShowComplete(true);

          } else {

            setResult(
`✅ Safe File Uploaded

Filename:
${fileName}`
            );

          }

        }

        else {

          if (
            fileName.endsWith(".jpg") ||
            fileName.endsWith(".png") ||
            fileName.endsWith(".pdf")
          ) {

            setResult(
`🛡 Upload Successful

Only safe files are allowed.

Uploaded:
${fileName}`
            );

          }

          else {

            setResult(
`❌ Upload Blocked

Reason:

Executable files are not allowed.

Allowed:

JPG

PNG

PDF`
            );

          }

        }

      }

    }, 150);

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

        lab_name: "File Upload"

      })

    });

    const data = await response.json();

    if (data.success) {

      alert("🎉 File Upload Lab Completed!");

      window.location.href = "/dashboard";

    }

  }

  catch {

    alert("Unable to connect to server.");

  }

};

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-8">

      <h2 className="text-3xl font-bold text-orange-700 mb-6">

        📁 File Upload Practice Lab

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

      {/* File Name */}

      <input

        type="text"

        value={fileName}

        onChange={(e) => setFileName(e.target.value)}

        placeholder="Enter file name..."

        className="w-full border rounded-lg p-4"

      />

      {/* Sample Files */}

      <div className="mt-8">

        <h3 className="font-bold mb-4">

          Sample Files

        </h3>

        <div className="flex flex-wrap gap-3">

          {sampleFiles.map((file) => (

            <button

              key={file}

              onClick={() => setFileName(file)}

              className="bg-gray-800 text-white px-4 py-2 rounded"

            >

              {file}

            </button>

          ))}

        </div>

      </div>

      {/* Upload */}

      <button

        onClick={uploadFile}

        className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg"

      >

        📤 Upload File

      </button>

      {/* Progress */}

      {progress > 0 && (

        <div className="mt-8">

          <div className="bg-gray-300 rounded-full h-5">

            <div

              className="bg-orange-600 h-5 rounded-full"

              style={{ width: `${progress}%` }}

            ></div>

          </div>

          <p className="mt-2 font-bold">

            {progress}%

          </p>

        </div>

      )}

      {/* Result */}

      {result && (

        <div className="mt-8 bg-gray-900 text-green-400 rounded-lg p-6 whitespace-pre-line">

          {result}

        </div>

      )}
            {/* File Details */}

      {fileName && (

        <div className="mt-10 bg-blue-50 rounded-lg p-6">

          <h3 className="text-2xl font-bold text-blue-700">

            File Details

          </h3>

          <div className="mt-4 space-y-2">

            <p><strong>Filename:</strong> {fileName}</p>

            <p>

              <strong>Status:</strong>{" "}

              {fileName.endsWith(".php") ||
              fileName.endsWith(".exe") ||
              fileName.endsWith(".js")
                ? "⚠ Dangerous"
                : "✅ Safe"}

            </p>

          </div>

        </div>

      )}

      {/* Explanation */}

      <div className="mt-10 bg-red-50 rounded-lg p-6">

        <h3 className="text-2xl font-bold text-red-700">

          Attack Explanation

        </h3>

        <p className="mt-4 text-gray-700">

          {mode === "vulnerable"

            ? "The server accepts every uploaded file without validating its extension or MIME type. An attacker can upload a malicious PHP shell or executable file and gain remote code execution."

            : "The server validates file type, extension and MIME type before accepting the upload. Dangerous executable files are rejected immediately."

          }

        </p>

      </div>

      {/* Complete Lab */}

      {showComplete && (

        <div className="mt-10 text-center">

          <button

            onClick={completeLab}

            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold"

          >

            ✅ Complete File Upload Lab

          </button>

        </div>

      )}

    </div>

  );

}

export default Practice;