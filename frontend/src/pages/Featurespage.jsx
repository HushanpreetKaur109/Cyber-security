import { Link } from "react-router-dom";

function FeaturesPage() {

  const features = [

    {
      title: "Interactive Labs",
      icon: "💻",
      description:
        "Practice SQL Injection, XSS, JWT, CSRF and File Upload vulnerabilities in a safe learning environment."
    },

    {
      title: "Cybersecurity Toolkit",
      icon: "🛠️",
      description:
        "Use Password Generator, Password Strength Checker, Hash Generator and JWT Decoder."
    },

    {
      title: "Progress Dashboard",
      icon: "📊",
      description:
        "Track completed labs, unlocked challenges and your learning progress."
    },

    {
      title: "Interactive Quizzes",
      icon: "📝",
      description:
        "Test your cybersecurity knowledge through quizzes after every lab."
    },

    {
      title: "Certificate Generation",
      icon: "🎓",
      description:
        "Generate your completion certificate after successfully finishing all labs."
    },

    {
      title: "Secure Authentication",
      icon: "🔐",
      description:
        "User registration, login and protected dashboard with secure authentication."
    },

    {
      title: "Vulnerable & Secure Modes",
      icon: "🛡️",
      description:
        "Compare vulnerable code with secure implementations to understand prevention."
    },

    {
      title: "Learning Resources",
      icon: "📚",
      description:
        "Learn vulnerability theory, prevention techniques and practical examples."
    },

    {
      title: "Contact & Feedback",
      icon: "💬",
      description:
        "Send feedback directly to the backend where messages are securely stored."
    },

    {
      title: "Real-world Practice",
      icon: "🌐",
      description:
        "Experience realistic cybersecurity scenarios without affecting production systems."
    }

  ];

  return (

    <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}

      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">

            Cybersecurity Platform Features

          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">

            Discover the powerful features of VulnLab that make
            cybersecurity learning practical, interactive and engaging.

          </p>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-14">

          Our Platform Features

        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (

            <div

              key={index}

              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition duration-300"

            >

              <div className="text-6xl">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {feature.title}

              </h3>

              <p className="text-gray-600 mt-4 leading-8">

                {feature.description}

              </p>

            </div>

          ))}

        </div>

      </section>
            {/* Ready To Practice */}

      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">

            Ready to Practice?

          </h2>

          <p className="mt-6 text-xl leading-8">

            Join VulnLab and improve your cybersecurity skills through
            hands-on learning, practical labs and real-world security
            challenges.

          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">

            <Link to="/register">

              <button className="bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition">

                Register Now

              </button>

            </Link>

            <Link to="/explore">

              <button className="border-2 border-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition">

                Explore Labs

              </button>

            </Link>

          </div>

        </div>

      </section>
          </div>

  );

}

export default FeaturesPage;