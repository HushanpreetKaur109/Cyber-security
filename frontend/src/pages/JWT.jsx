import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Theory from "../components/jwt/Theory";
import Practice from "../components/jwt/Practice";
import Quiz from "../components/jwt/Quiz";

function JWT() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white shadow-xl rounded-xl p-8">

          <h1 className="text-5xl font-bold text-center text-purple-700">

            🔐 JWT Authentication Lab

          </h1>

          <p className="text-center text-gray-600 mt-4 text-lg">

            Learn how attackers bypass JWT authentication and how secure verification prevents it.

          </p>

        </div>

        <Theory />

        <Practice />

        <Quiz />

      </div>

      <Footer />

    </div>

  );

}

export default JWT;