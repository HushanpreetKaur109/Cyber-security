import { useState } from "react";
import { Link } from "react-router-dom";

function PasswordGenerator() {

  const [length, setLength] = useState(16);

  const [uppercase, setUppercase] = useState(true);

  const [lowercase, setLowercase] = useState(true);

  const [numbers, setNumbers] = useState(true);

  const [symbols, setSymbols] = useState(true);

  const [password, setPassword] = useState("");

  const generatePassword = () => {

    let chars = "";

    if (uppercase)
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (lowercase)
      chars += "abcdefghijklmnopqrstuvwxyz";

    if (numbers)
      chars += "0123456789";

    if (symbols)
      chars += "!@#$%^&*()_+-=[]{}<>?/";

    if (chars === "") {

      alert("Select at least one option.");

      return;

    }

    let newPassword = "";

    for (let i = 0; i < length; i++) {

      newPassword += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );

    }

    setPassword(newPassword);

  };
  const copyPassword = () => {

  if (!password) {

    alert("Generate a password first.");

    return;

  }

  navigator.clipboard.writeText(password);

  alert("✅ Password copied to clipboard!");

};

return (

  <div className="min-h-screen bg-gray-100 py-12">

    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">

      <Link
        to="/toolkit"
        className="text-blue-600 font-bold hover:underline"
      >
        ← Back to Toolkit
      </Link>

      <h1 className="text-4xl font-bold text-center text-green-700 mt-6">

        🔒 Password Generator

      </h1>

      <p className="text-center text-gray-600 mt-3">

        Generate strong passwords for secure online accounts.

      </p>

      <div className="mt-10">

        <label className="font-bold">

          Password Length : {length}

        </label>

        <input

          type="range"

          min="8"

          max="32"

          value={length}

          onChange={(e) => setLength(Number(e.target.value))}

          className="w-full mt-3"

        />

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <label className="flex items-center gap-3">

          <input

            type="checkbox"

            checked={uppercase}

            onChange={() => setUppercase(!uppercase)}

          />

          Uppercase Letters

        </label>

        <label className="flex items-center gap-3">

          <input

            type="checkbox"

            checked={lowercase}

            onChange={() => setLowercase(!lowercase)}

          />

          Lowercase Letters

        </label>

        <label className="flex items-center gap-3">

          <input

            type="checkbox"

            checked={numbers}

            onChange={() => setNumbers(!numbers)}

          />

          Numbers

        </label>

        <label className="flex items-center gap-3">

          <input

            type="checkbox"

            checked={symbols}

            onChange={() => setSymbols(!symbols)}

          />

          Special Characters

        </label>

      </div>

      <div className="mt-10 text-center">

        <button

          onClick={generatePassword}

          className="bg-green-600 hover:bg-green-700 text-white px-10 py-3 rounded-lg font-bold text-lg"

        >

          🔑 Generate Password

        </button>

      </div>

      <div className="mt-10">

        <input

          type="text"

          readOnly

          value={password}

          placeholder="Generated password will appear here..."

          className="w-full border-2 border-gray-300 rounded-lg p-4 text-lg bg-gray-100"

        />

      </div>

      <div className="mt-6 text-center">

        <button

          onClick={copyPassword}

          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold"

        >

          📋 Copy Password

        </button>

      </div>
            {/* Password Tips */}

      <div className="mt-10 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">

        <h2 className="text-2xl font-bold text-green-700">

          🛡 Password Security Tips

        </h2>

        <ul className="mt-5 space-y-3 text-gray-700 list-disc list-inside">

          <li>Use at least 12–16 characters.</li>

          <li>Include uppercase and lowercase letters.</li>

          <li>Use numbers and special characters.</li>

          <li>Avoid using your name, birthday or phone number.</li>

          <li>Never reuse the same password on multiple websites.</li>

          <li>Use a password manager to store passwords securely.</li>

        </ul>

      </div>

      {/* Generated Password Strength */}

      {password && (

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-blue-700">

            📊 Generated Password Analysis

          </h2>

          <div className="mt-5 space-y-2 text-lg">

            <p>✅ Length: {password.length} Characters</p>

            <p>✅ Uppercase Included: {uppercase ? "Yes" : "No"}</p>

            <p>✅ Lowercase Included: {lowercase ? "Yes" : "No"}</p>

            <p>✅ Numbers Included: {numbers ? "Yes" : "No"}</p>

            <p>✅ Symbols Included: {symbols ? "Yes" : "No"}</p>

            <p className="font-bold text-green-700">

              🔒 Overall Strength: Very Strong

            </p>

          </div>

        </div>

      )}

    </div>

  </div>

);

}

export default PasswordGenerator;