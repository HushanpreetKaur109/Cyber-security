import { Link } from "react-router-dom";

function Toolkit() {

  const tools = [

    {
      id: 1,
      title: "Password Strength Checker",
      icon: "🔐",
      description:
        "Analyze password strength and identify weak passwords.",
      color: "bg-blue-600",
      route: "/toolkit/password-strength"
    },

    {
      id: 2,
      title: "Password Generator",
      icon: "🔒",
      description:
        "Generate secure passwords using uppercase, lowercase, numbers and symbols.",
      color: "bg-green-600",
      route: "/toolkit/password-generator"
    },

    {
      id: 3,
      title: "Hash Generator",
      icon: "🔑",
      description:
        "Generate MD5 and SHA-256 hashes from any text.",
      color: "bg-orange-600",
      route: "/toolkit/hash-generator"
    },

    {
      id: 4,
      title: "JWT Decoder",
      icon: "🎟️",
      description:
        "Decode JSON Web Tokens and inspect Header, Payload and Signature.",
      color: "bg-purple-600",
      route: "/toolkit/jwt-decoder"
    }

  ];
    return (

    <div className="min-h-screen bg-gray-100">

      {/* Hero */}

      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">

            🛠 Cybersecurity Toolkit

          </h1>

          <p className="mt-6 text-xl text-blue-100">

            Practice real-world cybersecurity utilities used by
            security professionals.

          </p>

        </div>

      </div>

      {/* Tools */}

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-2 gap-10">

          {tools.map((tool) => (

            <div
              key={tool.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="text-6xl">

                {tool.icon}

              </div>

              <h2 className="text-3xl font-bold mt-6">

                {tool.title}

              </h2>

              <p className="text-gray-600 mt-4 text-lg">

                {tool.description}

              </p>

              <Link to={tool.route}>

                <button
                  className={`${tool.color} mt-8 text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition`}
                >

                  Open Tool →

                </button>

              </Link>

            </div>

          ))}

        </div>
                <div className="mt-16 bg-white rounded-2xl shadow-lg p-10 text-center">

          <h2 className="text-3xl font-bold text-blue-700">

            Why Use This Toolkit?

          </h2>

          <p className="text-gray-600 mt-5 text-lg leading-8">

            This toolkit provides practical cybersecurity utilities that
            help learners understand password security, hashing,
            authentication tokens, and secure password generation.
            These tools demonstrate real-world concepts used by
            penetration testers, security analysts, and developers.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Toolkit;