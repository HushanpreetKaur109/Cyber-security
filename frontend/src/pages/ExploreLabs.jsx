function ExploreLabs() {

  const labs = [

    {
      id: 1,
      icon: "🗄️",
      title: "SQL Injection",
      level: "Beginner",
      duration: "25 Minutes",
      status: "FREE",
      description:
        "Learn authentication bypass, UNION attacks and secure coding."
    },

    {
      id: 2,
      icon: "💻",
      title: "Cross Site Scripting (XSS)",
      level: "Beginner",
      duration: "30 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Practice reflected, stored and DOM based XSS attacks."
    },

    {
      id: 3,
      icon: "🔐",
      title: "Broken Authentication",
      level: "Beginner",
      duration: "20 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Understand weak authentication and session vulnerabilities."
    },

    {
      id: 4,
      icon: "💣",
      title: "Command Injection",
      level: "Beginner",
      duration: "30 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Execute operating system commands through vulnerable applications."
    },

    {
      id: 5,
      icon: "📂",
      title: "File Upload",
      level: "Intermediate",
      duration: "30 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Learn insecure file upload vulnerabilities."
    },

    {
      id: 6,
      icon: "🔑",
      title: "JWT Authentication",
      level: "Intermediate",
      duration: "35 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Understand JWT attacks and secure authentication."
    },

    {
      id: 7,
      icon: "🛡️",
      title: "CSRF",
      level: "Intermediate",
      duration: "25 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Learn Cross Site Request Forgery attacks."
    },

    {
      id: 8,
      icon: "📁",
      title: "Path Traversal",
      level: "Intermediate",
      duration: "30 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Access sensitive files using directory traversal."
    },

    {
      id: 9,
      icon: "🆔",
      title: "IDOR",
      level: "Intermediate",
      duration: "30 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Practice Insecure Direct Object Reference attacks."
    },

    {
      id: 10,
      icon: "⚙️",
      title: "Security Misconfiguration",
      level: "Intermediate",
      duration: "25 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Identify common server misconfigurations."
    },

    {
      id: 11,
      icon: "🌐",
      title: "SSRF",
      level: "Advanced",
      duration: "40 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Explore Server Side Request Forgery attacks."
    },

    {
      id: 12,
      icon: "📄",
      title: "XXE",
      level: "Advanced",
      duration: "35 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Practice XML External Entity attacks."
    },

    {
      id: 13,
      icon: "🏃",
      title: "Race Condition",
      level: "Advanced",
      duration: "40 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Understand race condition vulnerabilities."
    },

    {
      id: 14,
      icon: "📦",
      title: "Insecure Deserialization",
      level: "Advanced",
      duration: "40 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Learn insecure deserialization attacks."
    },

    {
      id: 15,
      icon: "🔥",
      title: "Remote Code Execution",
      level: "Advanced",
      duration: "45 Minutes",
      status: "LOGIN REQUIRED",
      description:
        "Learn one of the most critical web vulnerabilities."
    }

  ];

  return (

    <div className="min-h-screen bg-gray-100">

      <section className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white py-20">

        <div className="max-w-7xl mx-auto text-center px-6">

          <h1 className="text-5xl font-bold">
            Cybersecurity Labs Catalog
          </h1>

          <p className="mt-6 text-xl">
            Browse all available cybersecurity learning labs.
            Complete the FREE SQL Injection lab to begin your journey.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {labs.map((lab) => (

            <div
              key={lab.id}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >

              <div className="flex justify-between items-center">

                <div className="text-5xl">
                  {lab.icon}
                </div>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    lab.status === "FREE"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {lab.status}
                </span>

              </div>

              <h2 className="text-2xl font-bold mt-6">
                {lab.title}
              </h2>

              <div className="flex gap-3 mt-4">

                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {lab.level}
                </span>

                <span className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  ⏱ {lab.duration}
                </span>

              </div>

              <p className="mt-5 text-gray-600 leading-7">
                {lab.description}
              </p>

            </div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default ExploreLabs;