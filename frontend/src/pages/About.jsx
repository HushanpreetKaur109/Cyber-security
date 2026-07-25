import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold">
            About VulnLab
          </h1>

          <p className="mt-6 text-xl max-w-3xl mx-auto">
            VulnLab is a hands-on cybersecurity learning platform where
            students practice real-world web vulnerabilities safely and
            improve secure coding skills.
          </p>

        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <div className="bg-white shadow-xl rounded-3xl p-12 text-center">

            <div className="text-8xl">
              🛡️
            </div>

            <h2 className="text-3xl font-bold mt-6">
              Learn by Practice
            </h2>

          </div>
        </div>

        <div>

          <h2 className="text-4xl font-bold text-gray-800">
            Practical Cybersecurity Learning
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Instead of only reading theory, VulnLab allows students to
            perform attacks in a safe environment, understand why they
            work, and learn how to secure applications against them.
          </p>

          <p className="mt-5 text-gray-600 leading-8">
            Every lab focuses on both exploitation and defense, helping
            learners understand secure software development.
          </p>

        </div>

      </section>

      {/* Mission Cards */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Mission
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">🎯</div>
            <h3 className="text-2xl font-bold mt-4">Mission</h3>
            <p className="mt-4 text-gray-600">
              Make cybersecurity learning practical and accessible.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">🚀</div>
            <h3 className="text-2xl font-bold mt-4">Vision</h3>
            <p className="mt-4 text-gray-600">
              Build skilled ethical hackers and secure developers.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-5xl">💡</div>
            <h3 className="text-2xl font-bold mt-4">Goal</h3>
            <p className="mt-4 text-gray-600">
              Encourage secure coding through hands-on labs.
            </p>
          </div>

        </div>

      </section>

      {/* Why Choose */}
      <section className="bg-white py-20 mt-12">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose VulnLab?
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg">

            <div>✅ Real-world Vulnerability Labs</div>
            <div>✅ Safe Practice Environment</div>
            <div>✅ Secure Coding Techniques</div>
            <div>✅ Beginner Friendly</div>
            <div>✅ Interactive Learning</div>
            <div>✅ Modern Web Security Topics</div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-center">

        <h2 className="text-5xl font-bold">
          Ready to Start Learning?
        </h2>

        <p className="mt-6 text-xl">
          Practice cybersecurity with real-world vulnerable applications.
        </p>

        <Link to="/register">
          <button className="mt-10 bg-white text-blue-700 px-10 py-4 rounded-xl font-bold hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>

      </section>

    </div>
  );
}

export default About;