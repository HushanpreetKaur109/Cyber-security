function Theory() {

  return (

    <div className="bg-white shadow-lg rounded-xl p-8 mt-8">

      <h2 className="text-3xl font-bold text-purple-700 mb-6">

        📘 JWT Authentication Theory

      </h2>

      <p className="text-gray-700 leading-8">

        JSON Web Token (JWT) is a secure method used to authenticate users.
        After successful login, the server generates a token and sends it to
        the client. The client includes this token in future requests to prove
        its identity.

      </p>

      {/* JWT Structure */}

      <div className="mt-8">

        <h3 className="text-2xl font-bold text-purple-700 mb-4">

          JWT Structure

        </h3>

        <div className="bg-gray-900 text-green-400 rounded-lg p-5 font-mono break-all">

          Header.Payload.Signature

        </div>

      </div>

      {/* Header */}

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">

        <h3 className="text-xl font-bold text-blue-700">

          Header

        </h3>

        <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg">

{`{
  "alg": "HS256",
  "typ": "JWT"
}`}

        </pre>

        <p className="mt-4 text-gray-700">

          The Header stores the token type and the signing algorithm.

        </p>

      </div>

      {/* Payload */}

      <div className="mt-8 bg-yellow-50 p-6 rounded-lg">

        <h3 className="text-xl font-bold text-yellow-700">

          Payload

        </h3>

        <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg">

{`{
  "username": "student",
  "role": "student"
}`}

        </pre>

        <p className="mt-4 text-gray-700">

          The Payload stores user information (claims). Never place sensitive
          information like passwords inside the payload.

        </p>

      </div>

      {/* Signature */}

      <div className="mt-8 bg-green-50 p-6 rounded-lg">

        <h3 className="text-xl font-bold text-green-700">

          Signature

        </h3>

        <pre className="mt-4 bg-black text-green-400 p-4 rounded-lg">

{`HMACSHA256(
 Base64(Header) + "." + Base64(Payload),
 SecretKey
)`}

        </pre>

        <p className="mt-4 text-gray-700">

          The Signature verifies that the token has not been modified by an
          attacker.

        </p>

      </div>

      {/* JWT Flow */}

      <div className="mt-8 bg-gray-100 rounded-lg p-6">

        <h3 className="text-2xl font-bold mb-5">

          JWT Authentication Flow

        </h3>

        <div className="space-y-4 text-lg">

          <p>1️⃣ User enters username and password.</p>

          <p>2️⃣ Server verifies the credentials.</p>

          <p>3️⃣ Server creates a signed JWT.</p>

          <p>4️⃣ Browser stores the JWT.</p>

          <p>5️⃣ Browser sends the JWT with every protected request.</p>

          <p>6️⃣ Server verifies the signature before granting access.</p>

        </div>

      </div>

      {/* Vulnerability */}

      <div className="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-red-700">

          🚨 Common JWT Vulnerabilities

        </h3>

        <ul className="list-disc pl-6 mt-4 space-y-2">

          <li>Using <strong>alg: none</strong> algorithm.</li>

          <li>Weak secret keys.</li>

          <li>Missing signature verification.</li>

          <li>Long-lived tokens without expiration.</li>

          <li>Storing JWT in insecure locations.</li>

        </ul>

      </div>

      {/* Prevention */}

      <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">

        <h3 className="text-2xl font-bold text-green-700">

          🛡 Prevention Tips

        </h3>

        <ul className="list-disc pl-6 mt-4 space-y-2">

          <li>Always verify the JWT signature.</li>

          <li>Use strong secret keys.</li>

          <li>Set token expiration (exp).</li>

          <li>Reject tokens using <strong>alg: none</strong>.</li>

          <li>Store JWT securely using HttpOnly cookies whenever possible.</li>

        </ul>

      </div>

    </div>

  );

}

export default Theory;