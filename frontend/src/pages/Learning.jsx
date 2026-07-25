import { Link } from "react-router-dom";

function Learning() {
  const labs = [
    {
      title: "SQL Injection",
      difficulty: "Beginner",
      status: "Available",
      path: "/labs/sql-injection",
    },
    {
      title: "Cross Site Scripting",
      difficulty: "Beginner",
      status: "Locked",
    },
    {
      title: "CSRF",
      difficulty: "Intermediate",
      status: "Locked",
    },
    {
      title: "JWT Authentication",
      difficulty: "Intermediate",
      status: "Locked",
    },
    {
      title: "File Upload",
      difficulty: "Advanced",
      status: "Locked",
    },
    {
      title: "Path Traversal",
      difficulty: "Advanced",
      status: "Locked",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-600 text-white py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-bold">
            Start Learning
          </h1>

          <p className="mt-4 text-xl">
            Learn cybersecurity through practical labs.
          </p>

        </div>

      </section>

      {/* Progress */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold">
            Your Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5 mt-6">
            <div className="bg-blue-600 h-5 rounded-full w-0"></div>
          </div>

          <p className="mt-4 text-gray-600">
            Completed Labs: 0 / 6
          </p>

        </div>

      </section>

      {/* Labs */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {labs.map((lab, index) => (

            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-8"
            >

              <div className="text-5xl">🛡️</div>

              <h2 className="text-2xl font-bold mt-5">
                {lab.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Difficulty: {lab.difficulty}
              </p>

              <p className="mt-2">
                Status:
                <span className="text-blue-600 font-semibold">
                  {" "}
                  {lab.status}
                </span>
              </p>

              {lab.status === "Available" ? (
                <Link to="/labs/sql-injection">
                  <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    Start Lab
                  </button>
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-6 w-full bg-gray-400 text-white py-3 rounded-lg cursor-not-allowed"
                >
                  Locked
                </button>
              )}

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default Learning;