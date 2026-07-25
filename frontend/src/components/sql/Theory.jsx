function Theory() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-red-600 mb-6">
        📘 SQL Injection Theory
      </h2>

      <p className="text-lg text-gray-700 leading-8">
        SQL Injection (SQLi) is one of the most common web application
        vulnerabilities. It occurs when an application inserts user input
        directly into an SQL query without proper validation or parameterized
        queries.
      </p>

      <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded">

        <h3 className="text-2xl font-bold text-red-700">
          How SQL Injection Works
        </h3>

        <p className="mt-4 text-gray-700">
          Consider this vulnerable SQL query:
        </p>

        <div className="mt-4 bg-black text-green-400 p-4 rounded-lg font-mono">
          SELECT * FROM users WHERE username='admin' AND password='1234';
        </div>

        <p className="mt-6 text-gray-700">
          If an attacker enters the following payload:
        </p>

        <div className="mt-4 bg-black text-green-400 p-4 rounded-lg font-mono">
          ' OR '1'='1
        </div>

        <p className="mt-6 text-gray-700">
          The final query becomes:
        </p>

        <div className="mt-4 bg-black text-green-400 p-4 rounded-lg font-mono">
          SELECT * FROM users WHERE username='' OR '1'='1' AND password='';
        </div>

        <p className="mt-6 text-gray-700">
          Since <strong>'1'='1'</strong> is always true, authentication can be
          bypassed.
        </p>

      </div>

      <div className="mt-10">

        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          Common SQL Injection Payloads
        </h3>

        <ul className="list-disc ml-8 text-lg space-y-3 text-gray-700">
          <li>' OR '1'='1</li>
          <li>' OR 1=1--</li>
          <li>admin'--</li>
          <li>' UNION SELECT NULL--</li>
          <li>' OR ''='</li>
        </ul>

      </div>

      <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">

        <h3 className="text-2xl font-bold text-yellow-700">
          Learning Objective
        </h3>

        <p className="mt-4 text-gray-700">
          In this lab you will:
        </p>

        <ul className="list-disc ml-8 mt-4 text-gray-700 space-y-2">
          <li>Understand SQL Injection attacks.</li>
          <li>Observe vulnerable SQL queries.</li>
          <li>Practice SQL Injection payloads safely.</li>
          <li>Learn how Prepared Statements prevent SQL Injection.</li>
        </ul>

      </div>

    </div>
  );
}

export default Theory;