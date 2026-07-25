function Prevention() {

  const methods = [

    {
      title: "Prepared Statements",
      description:
        "Always use parameterized queries instead of directly concatenating user input into SQL queries."
    },

    {
      title: "Input Validation",
      description:
        "Validate and sanitize all user input before processing it."
    },

    {
      title: "Least Privilege",
      description:
        "Database accounts should have only the permissions they actually require."
    },

    {
      title: "Stored Procedures",
      description:
        "Use stored procedures carefully to reduce SQL Injection risks."
    },

    {
      title: "Error Handling",
      description:
        "Do not expose SQL errors to users because they reveal database information."
    },

    {
      title: "Web Application Firewall (WAF)",
      description:
        "Deploy a WAF to detect and block malicious SQL Injection attempts."
    }

  ];

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-green-700 mb-8">

        🛡 SQL Injection Prevention

      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {methods.map((item, index) => (

          <div

            key={index}

            className="border rounded-xl p-6 hover:shadow-lg transition"

          >

            <h3 className="text-xl font-bold text-blue-700">

              {item.title}

            </h3>

            <p className="mt-3 text-gray-700">

              {item.description}

            </p>

          </div>

        ))}

      </div>

      <div className="mt-10 bg-green-50 border-l-4 border-green-600 p-6 rounded">

        <h3 className="text-2xl font-bold text-green-700">

          ✅ Best Practice

        </h3>

        <p className="mt-4 text-gray-700 leading-8">

          The best defense against SQL Injection is using
          <strong> Prepared Statements (Parameterized Queries)</strong>.
          Modern frameworks like Flask, Django, Spring Boot, ASP.NET, and
          Laravel provide secure database APIs that help prevent SQL Injection
          automatically when used correctly.

        </p>

      </div>

    </div>

  );

}

export default Prevention;