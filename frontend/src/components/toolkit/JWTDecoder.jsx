import { useState } from "react";
import { Link } from "react-router-dom";

function JWTDecoder() {

  const [token, setToken] = useState("");

  const [header, setHeader] = useState("");

  const [payload, setPayload] = useState("");

  const [signature, setSignature] = useState("");
const decodeJWT = () => {

  try {

    const input = token.trim();

    if (!input) {

      alert("Please enter a token.");

      return;

    }

    const decodeBase64Url = (str) => {

      str = str.replace(/-/g, "+").replace(/_/g, "/");

      while (str.length % 4 !== 0) {

        str += "=";

      }

      const binary = atob(str);

      const bytes = Uint8Array.from(binary, c => c.charCodeAt(0));

      return new TextDecoder().decode(bytes);

    };

    const parts = input.split(".");

    // Full JWT
    if (parts.length === 3) {

      const decodedHeader = JSON.parse(
        decodeBase64Url(parts[0])
      );

      const decodedPayload = JSON.parse(
        decodeBase64Url(parts[1])
      );

      setHeader(JSON.stringify(decodedHeader, null, 2));

      setPayload(JSON.stringify(decodedPayload, null, 2));

      setSignature(parts[2]);

      return;

    }

    // Payload only
    if (parts.length === 1) {

      const decodedPayload = JSON.parse(
        decodeBase64Url(parts[0])
      );

      setHeader("⚠ No Header Found");

      setPayload(JSON.stringify(decodedPayload, null, 2));

      setSignature("⚠ No Signature Found");

      return;

    }

    alert("Invalid JWT Token");

  }

  catch (error) {

    console.log(error);

    alert("Unable to decode token.");

  }

};

  const clearData = () => {

    setToken("");

    setHeader("");

    setPayload("");

    setSignature("");

  };
    return (

    <div className="min-h-screen bg-gray-100 py-12">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <Link
          to="/toolkit"
          className="text-blue-600 font-bold hover:underline"
        >
          ← Back to Toolkit
        </Link>

        <h1 className="text-4xl font-bold text-center text-blue-700 mt-6">

          🎟️ JWT Decoder

        </h1>

        <p className="text-center text-gray-600 mt-4">

          Decode a JSON Web Token (JWT) and inspect its Header, Payload and Signature.

        </p>

        <textarea

          value={token}

          onChange={(e) => setToken(e.target.value)}

          placeholder="Paste your JWT token here..."

          rows="6"

          className="w-full mt-8 border-2 border-gray-300 rounded-lg p-4 text-lg outline-none focus:border-blue-600"

        ></textarea>

        <div className="flex gap-4 mt-8">

          <button

            onClick={decodeJWT}

            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-bold"

          >

            Decode Token

          </button>

          <button

            onClick={clearData}

            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold"

          >

            Clear

          </button>

        </div>
                {(header || payload || signature) && (

          <div className="mt-10 space-y-8">

            {/* Header */}

            <div className="bg-gray-50 border rounded-xl p-6">

              <h2 className="text-2xl font-bold text-blue-700">

                📋 Header

              </h2>

              <pre className="mt-4 bg-white p-4 rounded border overflow-x-auto whitespace-pre-wrap">

                {header}

              </pre>

            </div>

            {/* Payload */}

            <div className="bg-gray-50 border rounded-xl p-6">

              <h2 className="text-2xl font-bold text-green-700">

                📦 Payload

              </h2>

              <pre className="mt-4 bg-white p-4 rounded border overflow-x-auto whitespace-pre-wrap">

                {payload}

              </pre>

            </div>

            {/* Signature */}

            <div className="bg-gray-50 border rounded-xl p-6">

              <h2 className="text-2xl font-bold text-purple-700">

                🔑 Signature

              </h2>

              <pre className="mt-4 bg-white p-4 rounded border overflow-x-auto break-all">

                {signature}

              </pre>

            </div>

          </div>

        )}

        <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-4 rounded">

  <p className="font-bold text-green-700">

    💡 Decoder Features

  </p>

  <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">

    <li>✅ Decode complete JWT tokens</li>

    <li>✅ Decode Base64 encoded JWT payloads</li>

    <li>✅ Display Header, Payload and Signature</li>

    <li>✅ Works with Base64URL encoding</li>

  </ul>

</div>

                {/* JWT Information */}

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">

          <h2 className="text-2xl font-bold text-blue-700">

            🛡 About JSON Web Token (JWT)

          </h2>

          <p className="mt-4 text-gray-700 leading-8">

            A JSON Web Token (JWT) is a compact and URL-safe token used
            for authentication and authorization. It securely transfers
            information between a client and a server.

          </p>

          <div className="mt-6">

            <h3 className="text-xl font-bold text-green-700">

              📋 Header

            </h3>

            <p className="mt-2 text-gray-700">

              Contains metadata about the token such as the signing
              algorithm (HS256, RS256) and the token type (JWT).

            </p>

          </div>

          <div className="mt-6">

            <h3 className="text-xl font-bold text-orange-700">

              📦 Payload

            </h3>

            <p className="mt-2 text-gray-700">

              Contains user information (claims) like user ID,
              username, email, role and token expiration time.

            </p>

          </div>

          <div className="mt-6">

            <h3 className="text-xl font-bold text-purple-700">

              🔑 Signature

            </h3>

            <p className="mt-2 text-gray-700">

              The signature verifies that the JWT has not been modified.
              If someone changes the Header or Payload, the signature
              becomes invalid.

            </p>

          </div>

          <div className="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">

            <p className="font-semibold text-yellow-800">

              ⚠ Security Tip

            </p>

            <p className="mt-2 text-gray-700">

              Never store sensitive information such as passwords or
              credit card details inside the JWT payload because anyone
              can decode it. JWT payloads are Base64 encoded, not encrypted.

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default JWTDecoder;