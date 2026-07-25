import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    try {

      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullName,
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      setMessage(data.message);

      if (data.success) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }

    } catch (error) {
      setMessage("Unable to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6 py-10">

      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl p-10">

        <div className="text-center">

          <div className="text-6xl">🛡️</div>

          <h1 className="text-3xl font-bold text-blue-700 mt-4">
            Create Your Account
          </h1>

          <p className="text-gray-500 mt-2">
            Join VulnLab and start your cybersecurity journey.
          </p>

        </div>

        <form className="mt-8" onSubmit={handleRegister}>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />

          </div>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Username
            </label>

            <input
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />

          </div>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />

          </div>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              required
            />

          </div>

          <div className="flex items-start gap-2 mb-6">

            <input type="checkbox" required />

            <p className="text-sm text-gray-600">
              I agree to the Terms & Conditions and Privacy Policy.
            </p>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Create Account
          </button>

        </form>

        {message && (
          <p className="text-center mt-5 font-semibold text-blue-700">
            {message}
          </p>
        )}

        <div className="text-center my-6 text-gray-500">
          OR
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100">
          Continue with Google
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;