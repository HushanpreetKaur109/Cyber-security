function Features() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <div className="grid md:grid-cols-3 gap-8">

        {/* Learn */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">📖</div>

          <h2 className="text-2xl font-bold mb-3">
            Learn
          </h2>

          <p className="text-gray-600">
            Learn about common web vulnerabilities through simple explanations.
          </p>
        </div>

        {/* Practice */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">💻</div>

          <h2 className="text-2xl font-bold mb-3">
            Practice
          </h2>

          <p className="text-gray-600">
            Practice attacks in a safe environment and improve your skills.
          </p>
        </div>

        {/* Secure */}
        <div className="bg-white shadow-lg rounded-xl p-8 text-center">
          <div className="text-5xl mb-4">🛡️</div>

          <h2 className="text-2xl font-bold mb-3">
            Secure
          </h2>

          <p className="text-gray-600">
            Learn secure coding practices and protect web applications.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;