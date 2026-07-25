import { Link } from "react-router-dom";

function FeaturesPage() {
  const features = [
    {
      title: "SQL Injection",
      icon: "🗄️",
      description:
        "Understand SQL Injection attacks and learn how to prevent them using secure coding practices."
    },
    {
      title: "Cross Site Scripting (XSS)",
      icon: "💻",
      description:
        "Practice reflected, stored and DOM-based XSS vulnerabilities in a safe environment."
    },
    {
      title: "JWT Authentication",
      icon: "🔑",
      description:
        "Learn JSON Web Token authentication, common mistakes and secure implementation."
    },
    {
      title: "CSRF",
      icon: "🛡️",
      description:
        "Understand Cross-Site Request Forgery attacks and effective protection techniques."
    },
    {
      title: "File Upload",
      icon: "📂",
      description:
        "Explore insecure file upload vulnerabilities and secure file validation methods."
    },
    {
      title: "Path Traversal",
      icon: "📁",
      description:
        "Learn directory traversal attacks and how to prevent unauthorized file access."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-bold">
            Cybersecurity Learning Labs
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Learn cybersecurity through interactive labs designed to teach
            real-world attacks and secure coding practices.
          </p>

        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto py-20 px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          Explore Our Labs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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

              <p className="text-gray-600 mt-4 leading-7">
                {feature.description}
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Start Lab
              </button>

            </div>

          ))}

        </div>

      </section>

      {/* Learning Process */}
      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-14">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="text-center">

              <div className="text-6xl">📚</div>

              <h3 className="text-2xl font-bold mt-5">
                Learn
              </h3>

              <p className="text-gray-600 mt-3">
                Understand the theory behind each vulnerability.
              </p>

            </div>

            <div className="text-center">

              <div className="text-6xl">💻</div>

              <h3 className="text-2xl font-bold mt-5">
                Practice
              </h3>

              <p className="text-gray-600 mt-3">
                Perform attacks safely in realistic lab environments.
              </p>

            </div>

            <div className="text-center">

              <div className="text-6xl">🛡️</div>

              <h3 className="text-2xl font-bold mt-5">
                Secure
              </h3>

              <p className="text-gray-600 mt-3">
                Learn secure coding techniques to defend applications.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready to Practice?
          </h2>

          <p className="mt-6 text-xl">
            Join VulnLab and improve your cybersecurity skills through hands-on learning.
          </p>

          <Link to="/register">
            <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
              Register Now
            </button>
          </Link>

        </div>

      </section>

    </div>
  );
}

export default FeaturesPage;