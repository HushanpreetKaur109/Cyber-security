import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {

    const user = localStorage.getItem("user");

    if (user) {
      navigate("/dashboard");
    }

  }, [navigate]);

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch("http://127.0.0.1:5000/login", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({

          username: username,
          password: password,

        }),

      });

      const data = await response.json();

      if (data.success) {

        localStorage.setItem(
          "user",
          JSON.stringify(data.user)
        );

        setMessage(data.message);

        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);

      } else {

        setMessage(data.message);

      }

    } catch (error) {

      setMessage("Unable to connect to server.");

    }

  };

  return (

    <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-cyan-50 flex items-center justify-center px-6">

      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-10">

        <div className="text-center">

          <div className="text-6xl">
            🛡️
          </div>

          <h1 className="text-3xl font-bold text-blue-700 mt-4">
            VulnLab
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Sign in to continue learning.
          </p>

        </div>

        <form className="mt-8" onSubmit={handleLogin}>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div className="mb-5">

            <label className="block mb-2 font-semibold">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

          </div>

          <div className="flex justify-between items-center text-sm mb-6">

            <label className="flex items-center gap-2">

              <input type="checkbox" />

              Remember Me

            </label>

            <a
              href="#"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Login Securely
          </button>

        </form>

        {message && (

          <p
            className={`mt-5 text-center font-semibold ${
              message.toLowerCase().includes("success")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>

        )}

        <div className="text-center my-6 text-gray-500">
          OR
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-100 transition">
          Continue with Google
        </button>

        <p className="text-center mt-6">

          Don't have an account?{" "}

          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;