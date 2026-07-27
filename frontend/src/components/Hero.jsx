
import { Link } from "react-router-dom";
function Hero() {
  return (
    

      <section className="bg-gradient-to-r from-blue-50 via-white to-cyan-50 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest">
              Welcome to VulnLab
            </p>

            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mt-4">
              Learn
              <span className="text-blue-600"> Cybersecurity </span>
              Through Practical Labs
            </h1>

            <p className="mt-8 text-lg text-gray-600 leading-8">
              Practice SQL Injection, Cross Site Scripting,
              JWT Authentication, CSRF,
              File Upload and Path Traversal
              in a secure learning environment.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex gap-5">

              <Link to="/toolkit">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">

                Cybersecurity Toolkit

              </button>
              </Link>
               
               <Link to="/explore">
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition">

                Explore Labs

              </button>
              </Link>

            </div>

            {/* Statistics */}

            <div className="flex gap-8 mt-14">

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  15+
                </h2>

                <p className="text-gray-500">
                  Security Labs
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  100+
                </h2>

                <p className="text-gray-500">
                  Practice Exercises
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-blue-700">
                  24/7
                </h2>

                <p className="text-gray-500">
                  Learning Access
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="bg-white shadow-2xl rounded-3xl p-10 w-96">

              <div className="text-center">

                <div className="text-7xl">
                  🛡️
                </div>

                <h2 className="text-3xl font-bold mt-6">
                  Secure Learning
                </h2>

                <p className="text-gray-500 mt-4">

                  Explore real-world
                  cybersecurity vulnerabilities
                  without risking production systems.

                </p>

              </div>

              <div className="mt-10 space-y-4">

                <div className="bg-blue-50 p-4 rounded-lg">

                  ✅ SQL Injection

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">

                  ✅ Cross Site Scripting

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">

                  ✅ JWT Authentication

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">

                  ✅ File Upload

                </div>

                <div className="bg-blue-50 p-4 rounded-lg">

                  ✅ Path Traversal

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    
  );
}

export default Hero;
