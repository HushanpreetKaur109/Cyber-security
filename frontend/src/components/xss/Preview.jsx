import { useState } from "react";

function Preview() {

  const [payload, setPayload] = useState("");

  return (

    <div className="bg-white rounded-xl shadow-lg p-8 mt-10">

      <h2 className="text-3xl font-bold text-blue-600 mb-6">
        🌐 Browser Preview
      </h2>

      <p className="text-gray-600 mb-6">
        Type an XSS payload below to see the difference between a vulnerable
        application and a secure application.
      </p>

      <textarea
        value={payload}
        onChange={(e) => setPayload(e.target.value)}
        rows="4"
        className="w-full border rounded-lg p-3 mb-8"
        placeholder={`<script>alert("XSS")</script>`}
      />

      {/* Vulnerable Preview */}

      <div className="mb-8">

        <h3 className="text-2xl font-bold text-red-600 mb-3">
          🚨 Vulnerable Preview
        </h3>

        <div
          className="border-2 border-red-500 rounded-lg p-5 bg-red-50"
          dangerouslySetInnerHTML={{ __html: payload }}
        />

        <p className="text-red-600 mt-3">
          This preview renders the HTML directly. In a real vulnerable website,
          malicious JavaScript could execute here.
        </p>

      </div>

      {/* Secure Preview */}

      <div>

        <h3 className="text-2xl font-bold text-green-600 mb-3">
          🛡 Secure Preview
        </h3>

        <div className="border-2 border-green-500 rounded-lg p-5 bg-green-50">
          {payload}
        </div>

        <p className="text-green-700 mt-3">
          Here the payload is displayed as plain text instead of being executed.
          This is the secure behavior.
        </p>

      </div>

      {/* Warning */}

      <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded">

        <h3 className="text-xl font-bold text-yellow-700">
          ⚠ Educational Purpose Only
        </h3>

        <p className="mt-3 text-gray-700">
          This simulation is only for learning. Never test XSS attacks on
          websites without permission.
        </p>

      </div>

    </div>

  );

}

export default Preview;