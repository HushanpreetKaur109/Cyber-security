import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalLabs: 0,
    completed: 0,
    locked: 0,
    progress: 0,

    sqlCompleted: false,
    xssCompleted: false,
    jwtCompleted: false,
    csrfCompleted: false,
    fileCompleted: false,
  });

  useEffect(() => {

    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`http://127.0.0.1:5000/dashboard/${user.id}`)
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));

  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}

      <nav className="bg-blue-700 text-white shadow-lg">

        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

          <div>

            <h1 className="text-3xl font-bold">
              🛡️ VulnLab
            </h1>

            <p className="text-blue-200">
              Cybersecurity Learning Platform
            </p>

          </div>

          <div className="flex items-center gap-5">

            <div className="text-right">

              <h2 className="font-bold">
                {user?.fullname}
              </h2>

              <p className="text-sm">
                Student
              </p>

            </div>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg"
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      {/* Welcome */}

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-4xl font-bold text-blue-700">
            Welcome {user?.fullname} 👋
          </h2>

          <p className="mt-3 text-gray-600 text-lg">
            Continue your cybersecurity learning journey.
          </p>

          <div className="mt-8">

            <div className="flex justify-between mb-2">

              <span>Progress</span>

              <span>{stats.progress}%</span>

            </div>

            <div className="bg-gray-300 rounded-full h-4">

              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${stats.progress}%` }}
              ></div>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-xl font-bold">
              📚 Total Labs
            </h3>

            <p className="text-5xl font-bold text-blue-700 mt-5">
              {stats.totalLabs}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-xl font-bold">
              ✅ Completed
            </h3>

            <p className="text-5xl font-bold text-green-600 mt-5">
              {stats.completed}
            </p>

          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">

            <h3 className="text-xl font-bold">
              🔒 Locked
            </h3>

            <p className="text-5xl font-bold text-red-500 mt-5">
              {stats.locked}
            </p>

          </div>

        </div>

      </section>

      {/* Available Labs */}

      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Available Labs
          </h2>

          <div className="space-y-5">

            {/* ================= SQL Injection ================= */}

<div className="flex justify-between items-center bg-green-50 p-5 rounded-lg">

  <div>

    <h3 className="font-bold text-xl">
      SQL Injection
    </h3>

    <p className="text-gray-500">
      Beginner • Database Security
    </p>

  </div>

  {stats.sqlCompleted ? (

    <button
      disabled
      className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      ✅ Done
    </button>

  ) : (

    <Link to="/labs/sql-injection">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">

        ▶ Start

      </button>

    </Link>

  )}

</div>


{/* ================= XSS ================= */}

<div
  className={`flex justify-between items-center p-5 rounded-lg ${
    stats.sqlCompleted ? "bg-green-50" : "bg-gray-100"
  }`}
>

  <div>

    <h3 className="font-bold text-xl">
      Cross Site Scripting (XSS)
    </h3>

    <p className="text-gray-500">
      Unlock after SQL Injection
    </p>

  </div>

  {stats.xssCompleted ? (

    <button
      disabled
      className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      ✅ Done
    </button>

  ) : stats.sqlCompleted ? (

    <Link to="/xss">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">

        ▶ Start

      </button>

    </Link>

  ) : (

    <button
      disabled
      className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      🔒 Locked
    </button>

  )}

</div>
{/* ================= JWT ================= */}

<div
  className={`flex justify-between items-center p-5 rounded-lg ${
    stats.xssCompleted ? "bg-green-50" : "bg-gray-100"
  }`}
>

  <div>

    <h3 className="font-bold text-xl">
      JWT Authentication
    </h3>

    <p className="text-gray-500">
      Unlock after XSS
    </p>

  </div>

  {stats.jwtCompleted ? (

    <button
      disabled
      className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      ✅ Done
    </button>

  ) : stats.xssCompleted ? (

    <Link to="/jwt">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
        ▶ Start
      </button>

    </Link>

  ) : (

    <button
      disabled
      className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      🔒 Locked
    </button>

  )}

</div>


{/* ================= CSRF ================= */}

<div
  className={`flex justify-between items-center p-5 rounded-lg ${
    stats.jwtCompleted ? "bg-green-50" : "bg-gray-100"
  }`}
>

  <div>

    <h3 className="font-bold text-xl">
      CSRF
    </h3>

    <p className="text-gray-500">
      Unlock after JWT
    </p>

  </div>

  {stats.csrfCompleted ? (

    <button
      disabled
      className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      ✅ Done
    </button>

  ) : stats.jwtCompleted ? (

    <Link to="/csrf">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
        ▶ Start
      </button>

    </Link>

  ) : (

    <button
      disabled
      className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      🔒 Locked
    </button>

  )}

</div>
{/* ================= File Upload ================= */}

<div
  className={`flex justify-between items-center p-5 rounded-lg ${
    stats.csrfCompleted ? "bg-green-50" : "bg-gray-100"
  }`}
>

  <div>

    <h3 className="font-bold text-xl">
      File Upload
    </h3>

    <p className="text-gray-500">
      Unlock after CSRF
    </p>

  </div>

  {stats.fileCompleted ? (

    <button
      disabled
      className="bg-green-600 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      ✅ Done
    </button>

  ) : stats.csrfCompleted ? (

    <Link to="/file-upload">

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">

        ▶ Start

      </button>

    </Link>

  ) : (

    <button
      disabled
      className="bg-gray-400 text-white px-6 py-2 rounded-lg cursor-not-allowed"
    >
      🔒 Locked
    </button>

  )}

</div>

          </div>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-blue-700 text-white text-center py-6">

        <p>
          © 2026 VulnLab | Cybersecurity Learning Platform
        </p>

        {stats.sqlCompleted &&
 stats.xssCompleted &&
 stats.jwtCompleted &&
 stats.csrfCompleted &&
 stats.fileCompleted && (

  <div className="max-w-7xl mx-auto px-6 pb-10 text-center">

    <Link to="/certificate">

      <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-10 py-4 rounded-xl text-xl font-bold shadow-lg">

        🏆 Generate Certificate

      </button>

    </Link>

  </div>

)}

      </footer>

    </div>

  );

}

export default Dashboard;
