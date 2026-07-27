import { useState } from "react";
import { Link } from "react-router-dom";

function PasswordStrength() {

  const [password, setPassword] = useState("");

  const hasUppercase = /[A-Z]/.test(password);

  const hasLowercase = /[a-z]/.test(password);

  const hasNumber = /[0-9]/.test(password);

  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const hasLength = password.length >= 8;

  let score = 0;

  if (hasUppercase) score++;

  if (hasLowercase) score++;

  if (hasNumber) score++;

  if (hasSpecial) score++;

  if (hasLength) score++;
    let strength = "Very Weak";

  let strengthColor = "text-red-600";

  let risk = "🔴 High Risk";

  let crackTime = "Less than 1 minute";

  if (score === 2) {

    strength = "Weak";

    strengthColor = "text-orange-600";

    risk = "🟠 Medium Risk";

    crackTime = "A few hours";

  }

  if (score === 3) {

    strength = "Medium";

    strengthColor = "text-yellow-600";

    risk = "🟡 Moderate Risk";

    crackTime = "Several days";

  }

  if (score === 4) {

    strength = "Strong";

    strengthColor = "text-green-600";

    risk = "🟢 Low Risk";

    crackTime = "Several years";

  }

  if (score === 5) {

    strength = "Very Strong";

    strengthColor = "text-green-700";

    risk = "🟢 Very Low Risk";

    crackTime = "Hundreds of years";

  }
    return (

    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <Link
          to="/toolkit"
          className="text-blue-600 font-bold hover:underline"
        >
          ← Back to Toolkit
        </Link>

        <h1 className="text-4xl font-bold text-center text-blue-700 mt-6">

          🔐 Password Strength Checker

        </h1>

        <p className="text-center text-gray-600 mt-3">

          Check whether your password is secure against common attacks.

        </p>

        <input

          type="password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          placeholder="Enter your password..."

          className="w-full mt-10 border-2 border-gray-300 rounded-lg p-4 text-lg outline-none focus:border-blue-600"

        />

        <div className="mt-8">

          <h2 className={`text-3xl font-bold ${strengthColor}`}>

            {strength}

          </h2>

          <p className="mt-3 text-lg">

            Risk Level: <span className="font-bold">{risk}</span>

          </p>

          <p className="text-lg mt-2">

            Estimated Crack Time:

            <span className="font-bold">

              {" "} {crackTime}

            </span>

          </p>

        </div>

        <div className="mt-10 space-y-4">
                  <div className="flex justify-between">

            <span>
              {hasUppercase ? "✅" : "❌"} Uppercase Letter
            </span>

            <span>
              {hasUppercase ? "Pass" : "Missing"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>
              {hasLowercase ? "✅" : "❌"} Lowercase Letter
            </span>

            <span>
              {hasLowercase ? "Pass" : "Missing"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>
              {hasNumber ? "✅" : "❌"} Number
            </span>

            <span>
              {hasNumber ? "Pass" : "Missing"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>
              {hasSpecial ? "✅" : "❌"} Special Character
            </span>

            <span>
              {hasSpecial ? "Pass" : "Missing"}
            </span>

          </div>

          <div className="flex justify-between">

            <span>
              {hasLength ? "✅" : "❌"} Minimum 8 Characters
            </span>

            <span>
              {hasLength ? "Pass" : "Missing"}
            </span>

          </div>

        </div>

        {/* Progress Bar */}

        <div className="mt-10">

          <div className="w-full bg-gray-300 rounded-full h-4">

            <div

              className={`h-4 rounded-full ${
                score <= 2
                  ? "bg-red-500"
                  : score === 3
                  ? "bg-yellow-500"
                  : "bg-green-600"
              }`}

              style={{ width: `${score * 20}%` }}

            ></div>

          </div>

        </div>

        {/* Security Tips */}

        <div className="mt-10 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-blue-700">

            🛡 Security Recommendation

          </h2>

          <p className="mt-4 text-gray-700 leading-8">

            Strong passwords should contain uppercase letters, lowercase
            letters, numbers, special characters and be at least
            8 characters long.

            Avoid using your name, mobile number, birthday or common
            dictionary words because they are vulnerable to
            dictionary and brute-force attacks.

          </p>

        </div>

      </div>

    </div>

  );

}

export default PasswordStrength;